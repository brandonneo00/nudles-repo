import UpdateInputQuestion from "../UpdateInputQuestion";
import { render, screen, fireEvent } from "@testing-library/react";
import { AuthContextProvider } from "../contexts/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";

const MockUpdateInputQuestion = () => {
  return (
    <AuthContextProvider>
      <UpdateInputQuestion />
    </AuthContextProvider>
  );
};


describe("UpdateInputQuestion", () => {
  it("render and show the same question passed into the fields", async () => {
    const login = async (email, password) => {
        const { dispatch } = useAuthContext();

      // setError(null);
      var loggedIn = false; //We added a variable to check if user succesfully logged in

      await signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
        //   dispatch({ type: "LOGIN", payload: res.user });
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
    await login("darktest2@gmail.com", "123456");
    render(<MockUpdateInputQuestion />);
  });
});
