// import { useState } from "react";
// import { useAuthContext } from "../hooks/useAuthContext";

// Imports from firebase
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";


test("useLogin", async () => {
  // const [error, setError] = useState(null);
  // const { dispatch } = useAuthContext();
  // const { user } = useAuthContext();

  //Sample inputs for the various accounts to test logging in and out
  //of the web application
  const sampleAccounts = [
    ["darktest2@gmail.com", "123456"], //Sample Existing Account
    ["helloitsme@adele.com", "helloitsme"], //Fake Account
    ["serious@serious.com", "password"], //Sample Existing Account
    ["goodbyemylover@gmail.com", "goodbyemyfriend"], //Fake Account
    ["blah@gmail.com", "password"] //Fake Account
  ];

  var resultArray = [];

  //Each item in the expectedOutcome array represents the following
  //[loggedIn, loggedOut], [loggedIn, loggedOut], ...
  var expectedOutcome = [
    [true, true],
    [false, false],
    [true, true],
    [false, false],
    [false, false]];


  //We modfied the versions for login and logout function as react useState do not work well
  //with the jest testing library, we retained the core functionality of the code while commenting out the
  //useState and console.log which are not essential for the testing of the code/function
  const login = async (email, password) => {
    // setError(null);
    var loggedIn = false; //We added a variable to check if user succesfully logged in

    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // dispatch({ type: "LOGIN", payload: res.user });
        loggedIn = true; // If the user successfully logs in, we will set this as true
      })
      .catch((err) => {
        // resultArray.push(false);
        // console.log(err.message);
        let finalMessage = "";

        if (err.code === "auth/user-not-found") {
          finalMessage = "No Such User";
        } else if (err.code === "auth/wrong-password") {
          finalMessage = "Invalid Password";
        } else {
          let msg = err.message;
          let start = msg.indexOf(":") + 2;
          let end = msg.indexOf("(auth");
          finalMessage = msg.substring(start, end);
        }

        // console.log(finalMessage);
        // setError(finalMessage);
      });

    return loggedIn;
  };

  const logout = async () => {
    var loggedOut = false
    await signOut(auth)
      .then(() => {
        // dispatch({ type: "LOGOUT" });
        loggedOut = true;
      })
      .catch((err) => {
        console.log(err.message);
      });

    return loggedOut;
  };

  

  for (let i = 0; i < sampleAccounts.length; i++) {
    const email = sampleAccounts[i][0];
    const password = sampleAccounts[i][1];
    const outcome = await login(email, password);
    var tempArray = []
    tempArray[0] = outcome;
    if (outcome) {
      const finishLogout = await logout();
      tempArray[1] = finishLogout;
    } else {
      tempArray[1] = false;
    }
    resultArray.push(tempArray);
  }

  //assert the expected result
  expect(resultArray).toMatchObject(expectedOutcome);
}, 30000);

