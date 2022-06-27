import "./Play.css";
import TopBarV2 from "./components/TopBarV2";
import {
  Text,
  Grid,
  GridItem,
  Box,
  HStack,
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  Center,
} from "@chakra-ui/react";
import GuessBox from "./GuessBox";
import { useState } from "react";
import PopUp from "./components/PopUp";
import PopOver from "./components/PopOver";
import AnswerChecker from "./components/AnswerChecker";
import KeyboardV3 from "./KeyboardV3";
import { useLocation } from "react-router-dom";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  setDoc,
  addDoc
} from "firebase/firestore";
import { db } from "./firebase/config";
import { useAuthContext } from "./hooks/useAuthContext";
import schedule from 'node-schedule';

function Play(props) {

  var timeNow = new Date();
  console.log(timeNow);

  schedule.scheduleJob('0 0 * * *', () => {
    console.log("reset already")
    doDuringMidnight();
  })

  const { user } = useAuthContext();
  const [disableBox1, setBox1] = useState(false);
  const [disableBox2, setBox2] = useState(true);
  const [disableBox3, setBox3] = useState(true);
  const [disableBox4, setBox4] = useState(true);
  const [disableBox5, setBox5] = useState(true);
  const [disableBox6, setBox6] = useState(true);

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");

  const [colorA, setColorA] = useState("#E5E5E5");
  const [colorB, setColorB] = useState("#E5E5E5");
  const [colorC, setColorC] = useState("#E5E5E5");
  const [colorD, setColorD] = useState("#E5E5E5");
  const [colorE, setColorE] = useState("#E5E5E5");
  const [colorF, setColorF] = useState("#E5E5E5");
  const [colorG, setColorG] = useState("#E5E5E5");
  const [colorH, setColorH] = useState("#E5E5E5");
  const [colorI, setColorI] = useState("#E5E5E5");
  const [colorJ, setColorJ] = useState("#E5E5E5");
  const [colorK, setColorK] = useState("#E5E5E5");
  const [colorL, setColorL] = useState("#E5E5E5");
  const [colorM, setColorM] = useState("#E5E5E5");
  const [colorN, setColorN] = useState("#E5E5E5");
  const [colorO, setColorO] = useState("#E5E5E5");
  const [colorP, setColorP] = useState("#E5E5E5");
  const [colorQ, setColorQ] = useState("#E5E5E5");
  const [colorR, setColorR] = useState("#E5E5E5");
  const [colorS, setColorS] = useState("#E5E5E5");
  const [colorT, setColorT] = useState("#E5E5E5");
  const [colorU, setColorU] = useState("#E5E5E5");
  const [colorV, setColorV] = useState("#E5E5E5");
  const [colorW, setColorW] = useState("#E5E5E5");
  const [colorX, setColorX] = useState("#E5E5E5");
  const [colorY, setColorY] = useState("#E5E5E5");
  const [colorZ, setColorZ] = useState("#E5E5E5");

  const [solved, setSolved] = useState(false);
  const [error, setError] = useState(null);
  const [chosenQn, setChosenQn] = useState("");
  const [playBefore, setPlayBefore] = useState(false);
  const [clickBefore, setClickBefore] = useState(false);

  const location = useLocation();
  const { obj } = location.state;

  var helperArr = [];

  const greenColor = "#6AAA64";
  const orangeColor = "#F7B556";
  const greyColor = "#787E7E";

  const guessesDocRef = doc(db, "guesses", user.uid);

  //Checks the User's Input for error
  const checkError = (userInput) => {
    if (userInput.includes(" ")) {
      throw Error("Invalid Input");
    } else if (userInput.length > chosenQn.answer.length) {
      throw Error("No. of characters exceed answer length!");
    } else if (userInput === "") {
      throw Error("Please key in something");
    }
  };

  //Color the keyboard button green if it matches
  function colorCodingGreen(alphabet) {
    if (alphabet === "A") {
      setColorA(greenColor);
    } else if (alphabet === "B") {
      setColorB(greenColor);
    } else if (alphabet === "C") {
      setColorC(greenColor);
    } else if (alphabet === "D") {
      setColorD(greenColor);
    } else if (alphabet === "E") {
      setColorE(greenColor);
    } else if (alphabet === "F") {
      setColorF(greenColor);
    } else if (alphabet === "G") {
      setColorG(greenColor);
    } else if (alphabet === "H") {
      setColorH(greenColor);
    } else if (alphabet === "I") {
      setColorI(greenColor);
    } else if (alphabet === "J") {
      setColorJ(greenColor);
    } else if (alphabet === "K") {
      setColorK(greenColor);
    } else if (alphabet === "L") {
      setColorL(greenColor);
    } else if (alphabet === "M") {
      setColorM(greenColor);
    } else if (alphabet === "N") {
      setColorN(greenColor);
    } else if (alphabet === "O") {
      setColorO(greenColor);
    } else if (alphabet === "P") {
      setColorP(greenColor);
    } else if (alphabet === "Q") {
      setColorQ(greenColor);
    } else if (alphabet === "R") {
      setColorR(greenColor);
    } else if (alphabet === "S") {
      setColorS(greenColor);
    } else if (alphabet === "T") {
      setColorT(greenColor);
    } else if (alphabet === "U") {
      setColorU(greenColor);
    } else if (alphabet === "V") {
      setColorV(greenColor);
    } else if (alphabet === "W") {
      setColorW(greenColor);
    } else if (alphabet === "X") {
      setColorX(greenColor);
    } else if (alphabet === "Y") {
      setColorY(greenColor);
    } else if (alphabet === "Z") {
      setColorZ(greenColor);
    }
  }

  //Color the keyboard button orange if it matches
  function colorCodingOrange(alphabet) {
    if (alphabet === "A" && colorA !== greenColor) {
      setColorA(orangeColor);
    } else if (alphabet === "B" && colorB !== greenColor) {
      setColorB(orangeColor);
    } else if (alphabet === "C" && colorC !== greenColor) {
      setColorC(orangeColor);
    } else if (alphabet === "D" && colorD !== greenColor) {
      setColorD(orangeColor);
    } else if (alphabet === "E" && colorE !== greenColor) {
      setColorE(orangeColor);
    } else if (alphabet === "F" && colorF !== greenColor) {
      setColorF(orangeColor);
    } else if (alphabet === "G" && colorG !== greenColor) {
      setColorG(orangeColor);
    } else if (alphabet === "H" && colorH !== greenColor) {
      setColorH(orangeColor);
    } else if (alphabet === "I" && colorI !== greenColor) {
      setColorI(orangeColor);
    } else if (alphabet === "J" && colorJ !== greenColor) {
      setColorJ(orangeColor);
    } else if (alphabet === "K" && colorK !== greenColor) {
      setColorK(orangeColor);
    } else if (alphabet === "L" && colorL !== greenColor) {
      setColorL(orangeColor);
    } else if (alphabet === "M" && colorM !== greenColor) {
      setColorM(orangeColor);
    } else if (alphabet === "N" && colorN !== greenColor) {
      setColorN(orangeColor);
    } else if (alphabet === "O" && colorO !== greenColor) {
      setColorO(orangeColor);
    } else if (alphabet === "P" && colorP !== greenColor) {
      setColorP(orangeColor);
    } else if (alphabet === "Q" && colorQ !== greenColor) {
      setColorQ(orangeColor);
    } else if (alphabet === "R" && colorR !== greenColor) {
      setColorR(orangeColor);
    } else if (alphabet === "S" && colorS !== greenColor) {
      setColorS(orangeColor);
    } else if (alphabet === "T" && colorT !== greenColor) {
      setColorT(orangeColor);
    } else if (alphabet === "U" && colorU !== greenColor) {
      setColorU(orangeColor);
    } else if (alphabet === "V" && colorV !== greenColor) {
      setColorV(orangeColor);
    } else if (alphabet === "W" && colorW !== greenColor) {
      setColorW(orangeColor);
    } else if (alphabet === "X" && colorX !== greenColor) {
      setColorX(orangeColor);
    } else if (alphabet === "Y" && colorY !== greenColor) {
      setColorY(orangeColor);
    } else if (alphabet === "Z" && colorZ !== greenColor) {
      setColorZ(orangeColor);
    }
  }

  //Color the keyboard button grey if it matches
  function colorCodingGrey(alphabet) {
    if (alphabet === "A") {
      setColorA(greyColor);
    } else if (alphabet === "B") {
      setColorB(greyColor);
    } else if (alphabet === "C") {
      setColorC(greyColor);
    } else if (alphabet === "D") {
      setColorD(greyColor);
    } else if (alphabet === "E") {
      setColorE(greyColor);
    } else if (alphabet === "F") {
      setColorF(greyColor);
    } else if (alphabet === "G") {
      setColorG(greyColor);
    } else if (alphabet === "H") {
      setColorH(greyColor);
    } else if (alphabet === "I") {
      setColorI(greyColor);
    } else if (alphabet === "J") {
      setColorJ(greyColor);
    } else if (alphabet === "K") {
      setColorK(greyColor);
    } else if (alphabet === "L") {
      setColorL(greyColor);
    } else if (alphabet === "M") {
      setColorM(greyColor);
    } else if (alphabet === "N") {
      setColorN(greyColor);
    } else if (alphabet === "O") {
      setColorO(greyColor);
    } else if (alphabet === "P") {
      setColorP(greyColor);
    } else if (alphabet === "Q") {
      setColorQ(greyColor);
    } else if (alphabet === "R") {
      setColorR(greyColor);
    } else if (alphabet === "S") {
      setColorS(greyColor);
    } else if (alphabet === "T") {
      setColorT(greyColor);
    } else if (alphabet === "U") {
      setColorU(greyColor);
    } else if (alphabet === "V") {
      setColorV(greyColor);
    } else if (alphabet === "W") {
      setColorW(greyColor);
    } else if (alphabet === "X") {
      setColorX(greyColor);
    } else if (alphabet === "Y") {
      setColorY(greyColor);
    } else if (alphabet === "Z") {
      setColorZ(greyColor);
    }
  }

  function paintingKeys(userInput, answerKey) {
    const colorArray = AnswerChecker(userInput, answerKey);
    for (let i = 0; i < colorArray.length; i++) {
      const colorToPaint = colorArray[i][0];
      const letterReference = colorArray[i][1];

      if (colorToPaint === greenColor) {
        colorCodingGreen(letterReference);
      } else if (colorToPaint === orangeColor) {
        colorCodingOrange(letterReference);
      } else if (colorToPaint === greyColor) {
        colorCodingGrey(letterReference);
      }
    }
  }

  function stopAfterCorrect(userInput, answerKey, setBox) {
    if (userInput !== answerKey && setBox !== null) {
      setBox(false);
    } else {
      setSolved(true);
    }
  }
  function handleChangeInput(event) {
    event.preventDefault();

    const finalInput = event.target.value.toUpperCase();
    if (!disableBox1) {
      setInput1(finalInput);
    } else if (!disableBox2) {
      setInput2(finalInput);
    } else if (!disableBox3) {
      setInput3(finalInput);
    } else if (!disableBox4) {
      setInput4(finalInput);
    } else if (!disableBox5) {
      setInput5(finalInput);
    } else if (!disableBox6) {
      setInput6(finalInput);
    }
  }
  var instantBox1 = disableBox1;
  var instantBox2 = disableBox2;
  var instantBox3 = disableBox3;
  var instantBox4 = disableBox4;
  var instantBox5 = disableBox5;
  var instantBox6 = disableBox6;
  var instantSolved = solved;

  var tempArr2 = [];
  var newArr2 = [];

  const setGuessCollection = async () => {
    const guessesSnap = await getDoc(guessesDocRef);
    tempArr2 = guessesSnap.data().guessArray;
    for (let i = 0; i < tempArr2.length; i++) {
      if (tempArr2[i].modulecode === obj.modulecode &&
        tempArr2[i].academicyear === obj.academicyear &&
        tempArr2[i].term === obj.term &&
        tempArr2[i].creatoruid === obj.creatoruid) {
        newArr2.push({
          modulecode: tempArr2[i].modulecode,
          academicyear: tempArr2[i].academicyear,
          term: tempArr2[i].term,
          creatoruid: tempArr2[i].creatoruid,
          guessBefore: true,
          guess1: input1,
          guess2: input2,
          guess3: input3,
          guess4: input4,
          guess5: input5,
          guess6: input6,
          boxstate1: instantBox1,
          boxstate2: instantBox2,
          boxstate3: instantBox3,
          boxstate4: instantBox4,
          boxstate5: instantBox5,
          boxstate6: instantBox6,
          solvedstate: instantSolved
        })

      } else {
        newArr2.push(tempArr2[i]);
      }
    }
    setDoc(guessesDocRef, { guessArray: newArr2 }, { merge: true });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!solved) {
      try {
        if (!disableBox1) {
          checkError(input1);
          setBox1(true);
          paintingKeys(input1, chosenQn.answer);
          stopAfterCorrect(input1, chosenQn.answer, setBox2);
          instantBox1 = true;
          if (input1 === chosenQn.answer) {
            instantSolved = true;
          } else {
            instantBox2 = false;
          }
        } else if (!disableBox2) {
          checkError(input2);
          setBox2(true);
          paintingKeys(input2, chosenQn.answer);
          stopAfterCorrect(input2, chosenQn.answer, setBox3);
          instantBox2 = true;
          if (input2 === chosenQn.answer) {
            instantSolved = true;
          } else {
            instantBox3 = false;
          }
        } else if (!disableBox3) {
          checkError(input3);
          setBox3(true);
          paintingKeys(input3, chosenQn.answer);
          stopAfterCorrect(input3, chosenQn.answer, setBox4);
          instantBox3 = true;
          if (input3 === chosenQn.answer) {
            instantSolved = true;
          } else {
            instantBox4 = false;
          }
        } else if (!disableBox4) {
          checkError(input4);
          setBox4(true);
          paintingKeys(input4, chosenQn.answer);
          stopAfterCorrect(input4, chosenQn.answer, setBox5);
          instantBox4 = true;
          if (input4 === chosenQn.answer) {
            instantSolved = true;
          } else {
            instantBox5 = false;
          }
        } else if (!disableBox5) {
          checkError(input5);
          setBox5(true);
          paintingKeys(input5, chosenQn.answer);
          stopAfterCorrect(input5, chosenQn.answer, setBox6);
          instantBox5 = true;
          if (input5 === chosenQn.answer) {
            instantSolved = true;
          } else {
            instantBox6 = false;
          }
        } else {
          checkError(input6);
          setBox6(true);
          paintingKeys(input6, chosenQn.answer);
          stopAfterCorrect(input6, chosenQn.answer, null);
          instantBox6 = true;
          instantSolved = true;
          console.log("Done with 6 tries!");
        }
      } catch (e) {
        setError(e);
        console.error(e);
      }
      setGuessCollection();
    }
  };

  function handleManualClick(e) {
    const letter = e.target.outerText;
    console.log(letter + " got clicked");
    if (!solved) {
      if (letter === "⌫") {
        //If BackSpace Button Pressed
        if (!disableBox1) {
          setInput1(input1.substring(0, input1.length - 1));
        } else if (!disableBox2) {
          setInput2(input2.substring(0, input2.length - 1));
        } else if (!disableBox3) {
          setInput3(input3.substring(0, input3.length - 1));
        } else if (!disableBox4) {
          setInput4(input4.substring(0, input4.length - 1));
        } else if (!disableBox5) {
          setInput5(input5.substring(0, input5.length - 1));
        } else {
          setInput6(input6.substring(0, input6.length - 1));
        }
      } else if (letter === "ENTER") {
        //If Enter Button Pressed
        setError(null);

        try {
          if (!disableBox1) {
            checkError(input1);
            setBox1(true);
            paintingKeys(input1, chosenQn.answer);
            stopAfterCorrect(input1, chosenQn.answer, setBox2);
            instantBox1 = true;
            if (input1 === chosenQn.answer) {
              instantSolved = true;
            } else {
              instantBox2 = false;
            }
          } else if (!disableBox2) {
            checkError(input2);
            setBox2(true);
            paintingKeys(input2, chosenQn.answer);
            stopAfterCorrect(input2, chosenQn.answer, setBox3);
            instantBox2 = true;
            if (input2 === chosenQn.answer) {
              instantSolved = true;
            } else {
              instantBox3 = false;
            }
          } else if (!disableBox3) {
            checkError(input3);
            setBox3(true);
            paintingKeys(input3, chosenQn.answer);
            stopAfterCorrect(input3, chosenQn.answer, setBox4);
            instantBox3 = true;
            if (input3 === chosenQn.answer) {
              instantSolved = true;
            } else {
              instantBox4 = false;
            }
          } else if (!disableBox4) {
            checkError(input4);
            setBox4(true);
            paintingKeys(input4, chosenQn.answer);
            stopAfterCorrect(input4, chosenQn.answer, setBox5);
            instantBox4 = true;
            if (input4 === chosenQn.answer) {
              instantSolved = true;
            } else {
              instantBox5 = false;
            }
          } else if (!disableBox5) {
            checkError(input5);
            setBox5(true);
            paintingKeys(input5, chosenQn.answer);
            stopAfterCorrect(input5, chosenQn.answer, setBox6);
            instantBox5 = true;
            if (input5 === chosenQn.answer) {
              instantSolved = true;
            } else {
              instantBox6 = false;
            }
          } else {
            checkError(input6);
            setBox6(true);
            paintingKeys(input6, chosenQn.answer);
            stopAfterCorrect(input6, chosenQn.answer, null);
            instantBox6 = true;
            instantSolved = true;
            console.log("Done with 6 tries!");
          }
          setGuessCollection();

        } catch (e) {
          setError(e);
          console.error(e);
        }
      } else {
        //Else Block (When all the other buttons are pressed)
        if (!disableBox1) {
          setInput1(input1 + letter);
        } else if (!disableBox2) {
          setInput2(input2 + letter);
        } else if (!disableBox3) {
          setInput3(input3 + letter);
        } else if (!disableBox4) {
          setInput4(input4 + letter);
        } else if (!disableBox5) {
          setInput5(input5 + letter);
        } else if (!disableBox6) {
          setInput6(input6 + letter);
        }
      }
    }
  }

  function textCreator(userInput, answerKey) {
    const colorArray = AnswerChecker(userInput, answerKey);
    var keyID = 0;
    return colorArray.map((x) => {
      keyID++;
      return (
        <Text key={keyID} color={x[0]} fontSize="2.083vw" fontWeight="bold">
          {x[1]}
        </Text>
      );
    });
  }

  // put in temporary array
  // run a for loop through the array
  // in the for loop check if each qn setBefore field is false
  // if false: choose this question by setting temp variable and set setBefore as true --> break out of for loop
  // using the temp variable, set the qn, hint, answer, no. of letters [json object already]


  var tempArr1 = [];
  var newArr1 = [];
  const doDuringMidnight = async () => {
    const forthedayRef = await getDocs(collection(db, "fortheday"));
    forthedayRef.forEach((docs) => {
      const currentDoc = doc(db, "fortheday", docs.id);
      setDoc(currentDoc, { resetBefore: false }, { merge: true });
    });

    const guessesSnap = await getDoc(guessesDocRef);
    if (guessesSnap.exists()) {
      tempArr1 = guessesSnap.data().guessArray;
      for (let i = 0; i < tempArr1.length; i++) {
        newArr1.push({
          modulecode: tempArr1[i].modulecode,
          academicyear: tempArr1[i].academicyear,
          term: tempArr1[i].term,
          creatoruid: tempArr1[i].creatoruid,
          guessBefore: false,
          guess1: "",
          guess2: "",
          guess3: "",
          guess4: "",
          guess5: "",
          guess6: "",
          boxstate1: false,
          boxstate2: true,
          boxstate3: true,
          boxstate4: true,
          boxstate5: true,
          boxstate6: true,
          solvedstate: false,
        })
      }
      setDoc(guessesDocRef, { guessArray: newArr1 }, { merge: true });
    }
  }

  var placeholderArr = [];
  const handleClick = async () => {
    setChosenQn("");

    //creating reference to the fortheday collection
    const forthedayRef = collection(db, "fortheday");
    //creating query against the fortheday collection
    const forthedayQuery = query(
      forthedayRef,
      where("modulecode", "==", obj.modulecode),
      where("ay", "==", obj.academicyear),
      where("term", "==", obj.term),
      where("creatoruid", "==", obj.creatoruid)
    );
    //executing the fortheday query
    const forthedaySnapshot = await getDocs(forthedayQuery);
    //storing it in a variable
    var todayObj;
    forthedaySnapshot.forEach((file) => {
      todayObj = file;
    })

    //for guesses collection
    const guessesSnap = await getDoc(guessesDocRef);
    let newComer = true;

    if (guessesSnap.exists()) {
      placeholderArr = guessesSnap.data().guessArray;
      for (let i = 0; i < placeholderArr.length; i++) {
        if (placeholderArr[i].modulecode === obj.modulecode &&
          placeholderArr[i].academicyear === obj.academicyear &&
          placeholderArr[i].term === obj.term &&
          placeholderArr[i].creatoruid === obj.creatoruid) {
          const bool = placeholderArr[i].guessBefore;
          newComer = false;
          if (bool) {
            // if resetBefore, display what the user actually guessBefore
            setInput1(placeholderArr[i].guess1);
            setInput2(placeholderArr[i].guess2);
            setInput3(placeholderArr[i].guess3);
            setInput4(placeholderArr[i].guess4);
            setInput5(placeholderArr[i].guess5);
            setInput6(placeholderArr[i].guess6);
            // disable boxes --> prevent users from clicking the things
            setBox1(placeholderArr[i].boxstate1);
            setBox2(placeholderArr[i].boxstate2);
            setBox3(placeholderArr[i].boxstate3);
            setBox4(placeholderArr[i].boxstate4);
            setBox5(placeholderArr[i].boxstate5);
            setBox6(placeholderArr[i].boxstate6);

            setSolved(placeholderArr[i].solvedstate);
          }
          setPlayBefore(true);
          break;
        }
      }
      // play NUdleS before but first time playing this module before
      if (newComer) {
        placeholderArr.push({
          modulecode: obj.modulecode,
          academicyear: obj.academicyear,
          term: obj.term,
          creatoruid: obj.creatoruid,
          guessBefore: false,
          guess1: "",
          guess2: "",
          guess3: "",
          guess4: "",
          guess5: "",
          guess6: "",
          boxstate1: false,
          boxstate2: true,
          boxstate3: true,
          boxstate4: true,
          boxstate5: true,
          boxstate6: true,
          solvedstate: false
        })
        setDoc(guessesDocRef, { guessArray: placeholderArr }, { merge: true });
      }

    } else { //If user first time playing nudles (newcomer)
      setDoc(guessesDocRef, {
        guessArray: [{
          modulecode: obj.modulecode,
          academicyear: obj.academicyear,
          term: obj.term,
          creatoruid: obj.creatoruid,
          guessBefore: false,
          guess1: "",
          guess2: "",
          guess3: "",
          guess4: "",
          guess5: "",
          guess6: "",
          boxstate1: false,
          boxstate2: true,
          boxstate3: true,
          boxstate4: true,
          boxstate5: true,
          boxstate6: true,
          solvedstate: false
        }]
      },
        { merge: true })
    }

    const getQuestion = async () => {
      const querySnapshot = await getDocs(
        collection(
          db,
          "modules",
          obj.modulecode,
          obj.academicyear,
          obj.term,
          obj.creatoruid
        )
      );
      querySnapshot.forEach((doc) => {
        helperArr.push(doc);
      });

      for (let i = 0; i < helperArr.length; i++) {
        const chosenBefore = helperArr[i].data().setBefore;
        if (!chosenBefore) {
          //using docID
          const Ref = doc(
            db,
            "modules",
            obj.modulecode,
            obj.academicyear,
            obj.term,
            obj.creatoruid,
            helperArr[i].id
          );
          //Set the module collection setBefore field as true
          setDoc(Ref, { setBefore: true }, { merge: true });

          //Set the fortheday collection resetBefore field as true and change the
          //question, hint, answer and explanation as the chosen new fields
          if (todayObj === undefined) {
            await addDoc(collection(db, "fortheday"), {
              modulecode: obj.modulecode,
              ay: obj.academicyear,
              term: obj.term,
              creatoruid: obj.creatoruid,
              question: helperArr[i].data().question,
              answer: helperArr[i].data().answer,
              hint: helperArr[i].data().hint,
              explanation: helperArr[i].data().explanation,
              resetBefore: true
            })
          } else {
            const forTheDayObj = doc(db, "fortheday", todayObj.id)
            setDoc(forTheDayObj, {
              question: helperArr[i].data().question,
              answer: helperArr[i].data().answer,
              hint: helperArr[i].data().hint,
              explanation: helperArr[i].data().explanation,
              resetBefore: true
            }, { merge: true })
          }

          break;
        }
      }
    }
    // if is a totally new entry/selection OR havent reset question cuz before midnight then do this
    if (todayObj === undefined || !todayObj.data().resetBefore) {
      getQuestion();
    }

    //executing the fortheday query
    const forthedaySnapshot2 = await getDocs(forthedayQuery);
    //storing it in a variable
    var todayObj2;
    forthedaySnapshot2.forEach((file) => {
      todayObj2 = file;
    })

    setChosenQn({
      question: todayObj2.data().question,
      answer: todayObj2.data().answer,
      hint: todayObj2.data().hint,
      explanation: todayObj2.data().explanation
    });
    setClickBefore(true);
  };

  return (
    <div className="background6">
      <TopBarV2 />
      {!clickBefore ? (

        //////////////////////////////if never click before/////////////////////////

        <Center textAlign="center" minHeight="100vh">
          <Box
            as="button"
            height="6vw"
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            border="0px"
            width="24vw"
            borderRadius="15px"
            fontSize="2vw"
            fontWeight="semibold"
            bg="#F7B556"
            borderColor=""
            color="#000000"
            _hover={{ bg: "#DBA14D" }}
            _active={{
              bg: "#F7B556",
              transform: "scale(0.98)",
              borderColor: "",
            }}
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}
            onClick={handleClick}
          >
            Double-Click to Play
          </Box>
        </Center>

      ) : playBefore ? (

        //////////////////////////////Clicked before && if play before/////////////////////////

        <Box minHeight="100vh">
          <Grid>
            <GridItem
              bg="#E5E5E5"
              borderRadius="15px"
              margin="2% 2% 1%"
              padding="1.5%"
            >
              <Box marginBottom="1vw">
                <HStack>
                  <Text
                    align="left"
                    fontSize="1.500vw"
                    fontWeight="bold"
                  >
                    {obj.modulecode}
                  </Text>
                  <Text align="left" fontSize="1.500vw" fontWeight="bold">
                    {"AY " + obj.academicyear + " " + obj.term}
                  </Text>
                  <Text align="left" fontSize="1.500vw" fontWeight="bold">
                    {"by " + obj.creatorusername}
                  </Text>
                </HStack>
              </Box>
              <Text as="u" align="left" fontSize="1.300vw" fontWeight="bold" textColor="#686B6F">
                Question
              </Text>
              <Text align="left" fontSize="1.250vw" fontWeight="bold" textColor="#686B6F">
                {chosenQn.question}
              </Text>

              <Box textAlign="right" marginTop="1rem">
                <PopOver
                  threeTries={disableBox4 && !solved}
                  hint={chosenQn.hint}
                />
                <PopUp completed={!solved} chosenQuestion={chosenQn} />
              </Box>

              <Box>
                <Text fontSize="1.250vw" fontWeight="bold" textColor="#686B6F">
                  No. of letters in answer: {chosenQn.answer.length}
                </Text>
              </Box>
            </GridItem>
          </Grid>

          <Center marginBottom="1rem">
            {error && (
              <Alert
                status="error"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                fontSize="md"
                margin="0% 2%"
              >
                <AlertIcon />
                <AlertTitle>Error: </AlertTitle>
                <AlertDescription>{error.message}</AlertDescription>
              </Alert>
            )}
          </Center>

          {disableBox1 ? (
            <Grid margin="0.5px">
              <Center>
                <GridItem
                  bg="#FFFFFF"
                  borderRadius="15px"
                  borderWidth="5px"
                  borderColor="#E5E5E5"
                  margin="0.4rem"
                  padding="0% 1.5%"
                  width="26.042vw"
                  height="3.646vw"
                >
                  <Center>
                    <HStack spacing={0}>
                      {" "}
                      {textCreator(input1, chosenQn.answer)}{" "}
                    </HStack>
                  </Center>
                </GridItem>
              </Center>
            </Grid>
          ) : (
            <GuessBox
              permission={disableBox1}
              onChange1={handleChangeInput}
              value1={input1}
              enter={handleSubmit}
            />
          )}

          {disableBox2 ? (
            <Grid margin="0.5px">
              <Center>
                <GridItem
                  bg="#FFFFFF"
                  borderRadius="15px"
                  borderWidth="5px"
                  borderColor="#E5E5E5"
                  margin="0.4rem"
                  padding="0% 1.5%"
                  width="26.042vw"
                  height="3.646vw"
                >
                  <Center>
                    <HStack spacing={0}>
                      {" "}
                      {textCreator(input2, chosenQn.answer)}{" "}
                    </HStack>
                  </Center>
                </GridItem>
              </Center>
            </Grid>
          ) : (
            <GuessBox
              permission={disableBox2}
              onChange1={handleChangeInput}
              value1={input2}
              enter={handleSubmit}
            />
          )}

          {disableBox3 ? (
            <Grid margin="0.5px">
              <Center>
                <GridItem
                  bg="#FFFFFF"
                  borderRadius="15px"
                  borderWidth="5px"
                  borderColor="#E5E5E5"
                  margin="0.4rem"
                  padding="0% 1.5%"
                  width="26.042vw"
                  height="3.646vw"
                >
                  <Center>
                    <HStack spacing={0}>
                      {" "}
                      {textCreator(input3, chosenQn.answer)}{" "}
                    </HStack>
                  </Center>
                </GridItem>
              </Center>
            </Grid>
          ) : (
            <GuessBox
              permission={disableBox3}
              onChange1={handleChangeInput}
              value1={input3}
              enter={handleSubmit}
            />
          )}

          {disableBox4 ? (
            <Grid margin="0.5px">
              <Center>
                <GridItem
                  bg="#FFFFFF"
                  borderRadius="15px"
                  borderWidth="5px"
                  borderColor="#E5E5E5"
                  margin="0.4rem"
                  padding="0% 1.5%"
                  width="26.042vw"
                  height="3.646vw"
                >
                  <Center>
                    <HStack spacing={0}>
                      {" "}
                      {textCreator(input4, chosenQn.answer)}{" "}
                    </HStack>
                  </Center>
                </GridItem>
              </Center>
            </Grid>
          ) : (
            <GuessBox
              permission={disableBox4}
              onChange1={handleChangeInput}
              value1={input4}
              enter={handleSubmit}
            />
          )}

          {disableBox5 ? (
            <Grid margin="0.5px">
              <Center>
                <GridItem
                  bg="#FFFFFF"
                  borderRadius="15px"
                  borderWidth="5px"
                  borderColor="#E5E5E5"
                  margin="0.4rem"
                  padding="0% 1.5%"
                  width="26.042vw"
                  height="3.646vw"
                >
                  <Center>
                    <HStack spacing={0}>
                      {" "}
                      {textCreator(input5, chosenQn.answer)}{" "}
                    </HStack>
                  </Center>
                </GridItem>
              </Center>
            </Grid>
          ) : (
            <GuessBox
              permission={disableBox5}
              onChange1={handleChangeInput}
              value1={input5}
              enter={handleSubmit}
            />
          )}

          {disableBox6 ? (
            <Grid margin="0.5px">
              <Center>
                <GridItem
                  bg="#FFFFFF"
                  borderRadius="15px"
                  borderWidth="5px"
                  borderColor="#E5E5E5"
                  margin="0.4rem"
                  padding="0% 1.5%"
                  width="26.042vw"
                  height="3.646vw"
                >
                  <Center>
                    <HStack spacing={0}>
                      {" "}
                      {textCreator(input6, chosenQn.answer)}{" "}
                    </HStack>
                  </Center>
                </GridItem>
              </Center>
            </Grid>
          ) : (
            <GuessBox
              permission={disableBox6}
              onChange1={handleChangeInput}
              value1={input6}
              enter={handleSubmit}
            />
          )}

          <Box height="1vw"></Box>

          <KeyboardV3
            manualClick={handleManualClick}
            colorA={colorA}
            colorB={colorB}
            colorC={colorC}
            colorD={colorD}
            colorE={colorE}
            colorF={colorF}
            colorG={colorG}
            colorH={colorH}
            colorI={colorI}
            colorJ={colorJ}
            colorK={colorK}
            colorL={colorL}
            colorM={colorM}
            colorN={colorN}
            colorO={colorO}
            colorP={colorP}
            colorQ={colorQ}
            colorR={colorR}
            colorS={colorS}
            colorT={colorT}
            colorU={colorU}
            colorV={colorV}
            colorW={colorW}
            colorX={colorX}
            colorY={colorY}
            colorZ={colorZ}
          />

          <Box height="3vw" />
        </Box>
      ) : (

        //////////////////////////////Click before && if never play before/////////////////////////

        <Box minHeight="100vh">
          <Grid>
            <GridItem
              bg="#E5E5E5"
              borderRadius="15px"
              margin="2% 2% 1%"
              padding="1.5%"
            >
              <Box marginBottom="1vw">
                <HStack>
                  <Text
                    align="left"
                    fontSize="1.500vw"
                    fontWeight="bold"
                  >
                    {obj.modulecode}
                  </Text>
                  <Text align="left" fontSize="1.500vw" fontWeight="bold">
                    {"AY " + obj.academicyear + " " + obj.term}
                  </Text>
                  <Text align="left" fontSize="1.500vw" fontWeight="bold">
                    {"by " + obj.creatorusername}
                  </Text>
                </HStack>
              </Box>
              <Text as="u" align="left" fontSize="1.300vw" fontWeight="bold" textColor="#686B6F">
                Question
              </Text>
              <Text align="left" fontSize="1.250vw" fontWeight="bold" textColor="#686B6F">
                {chosenQn.question}
              </Text>

              <Box textAlign="right" marginTop="1rem">
                <PopOver
                  threeTries={disableBox4 && !solved}
                  hint={chosenQn.hint}
                />
                <PopUp completed={!solved} chosenQuestion={chosenQn} />
              </Box>

              <Box>
                <Text fontSize="1.250vw" fontWeight="bold" textColor="#686B6F">
                  No. of letters in answer: {chosenQn.answer.length}
                </Text>
              </Box>
            </GridItem>
          </Grid>

          <Center marginBottom="1rem">
            {error && (
              <Alert
                status="error"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                fontSize="md"
                margin="0% 2%"
              >
                <AlertIcon />
                <AlertTitle>Error: </AlertTitle>
                <AlertDescription>{error.message}</AlertDescription>
              </Alert>
            )}
          </Center>

          {disableBox1 ? (
            <Grid margin="0.5px">
              <Center>
                <GridItem
                  bg="#FFFFFF"
                  borderRadius="15px"
                  borderWidth="5px"
                  borderColor="#E5E5E5"
                  margin="0.4rem"
                  padding="0% 1.5%"
                  width="26.042vw"
                  height="3.646vw"
                >
                  <Center>
                    <HStack spacing={0}>
                      {" "}
                      {textCreator(input1, chosenQn.answer)}{" "}
                    </HStack>
                  </Center>
                </GridItem>
              </Center>
            </Grid>
          ) : (
            <GuessBox
              permission={disableBox1}
              onChange1={handleChangeInput}
              value1={input1}
              enter={handleSubmit}
            />
          )}

          {disableBox2 ? (
            <Grid margin="0.5px">
              <Center>
                <GridItem
                  bg="#FFFFFF"
                  borderRadius="15px"
                  borderWidth="5px"
                  borderColor="#E5E5E5"
                  margin="0.4rem"
                  padding="0% 1.5%"
                  width="26.042vw"
                  height="3.646vw"
                >
                  <Center>
                    <HStack spacing={0}>
                      {" "}
                      {textCreator(input2, chosenQn.answer)}{" "}
                    </HStack>
                  </Center>
                </GridItem>
              </Center>
            </Grid>
          ) : (
            <GuessBox
              permission={disableBox2}
              onChange1={handleChangeInput}
              value1={input2}
              enter={handleSubmit}
            />
          )}

          {disableBox3 ? (
            <Grid margin="0.5px">
              <Center>
                <GridItem
                  bg="#FFFFFF"
                  borderRadius="15px"
                  borderWidth="5px"
                  borderColor="#E5E5E5"
                  margin="0.4rem"
                  padding="0% 1.5%"
                  width="26.042vw"
                  height="3.646vw"
                >
                  <Center>
                    <HStack spacing={0}>
                      {" "}
                      {textCreator(input3, chosenQn.answer)}{" "}
                    </HStack>
                  </Center>
                </GridItem>
              </Center>
            </Grid>
          ) : (
            <GuessBox
              permission={disableBox3}
              onChange1={handleChangeInput}
              value1={input3}
              enter={handleSubmit}
            />
          )}

          {disableBox4 ? (
            <Grid margin="0.5px">
              <Center>
                <GridItem
                  bg="#FFFFFF"
                  borderRadius="15px"
                  borderWidth="5px"
                  borderColor="#E5E5E5"
                  margin="0.4rem"
                  padding="0% 1.5%"
                  width="26.042vw"
                  height="3.646vw"
                >
                  <Center>
                    <HStack spacing={0}>
                      {" "}
                      {textCreator(input4, chosenQn.answer)}{" "}
                    </HStack>
                  </Center>
                </GridItem>
              </Center>
            </Grid>
          ) : (
            <GuessBox
              permission={disableBox4}
              onChange1={handleChangeInput}
              value1={input4}
              enter={handleSubmit}
            />
          )}

          {disableBox5 ? (
            <Grid margin="0.5px">
              <Center>
                <GridItem
                  bg="#FFFFFF"
                  borderRadius="15px"
                  borderWidth="5px"
                  borderColor="#E5E5E5"
                  margin="0.4rem"
                  padding="0% 1.5%"
                  width="26.042vw"
                  height="3.646vw"
                >
                  <Center>
                    <HStack spacing={0}>
                      {" "}
                      {textCreator(input5, chosenQn.answer)}{" "}
                    </HStack>
                  </Center>
                </GridItem>
              </Center>
            </Grid>
          ) : (
            <GuessBox
              permission={disableBox5}
              onChange1={handleChangeInput}
              value1={input5}
              enter={handleSubmit}
            />
          )}

          {disableBox6 ? (
            <Grid margin="0.5px">
              <Center>
                <GridItem
                  bg="#FFFFFF"
                  borderRadius="15px"
                  borderWidth="5px"
                  borderColor="#E5E5E5"
                  margin="0.4rem"
                  padding="0% 1.5%"
                  width="26.042vw"
                  height="3.646vw"
                >
                  <Center>
                    <HStack spacing={0}>
                      {" "}
                      {textCreator(input6, chosenQn.answer)}{" "}
                    </HStack>
                  </Center>
                </GridItem>
              </Center>
            </Grid>
          ) : (
            <GuessBox
              permission={disableBox6}
              onChange1={handleChangeInput}
              value1={input6}
              enter={handleSubmit}
            />
          )}

          <Box height="1vw"></Box>

          <KeyboardV3
            manualClick={handleManualClick}
            colorA={colorA}
            colorB={colorB}
            colorC={colorC}
            colorD={colorD}
            colorE={colorE}
            colorF={colorF}
            colorG={colorG}
            colorH={colorH}
            colorI={colorI}
            colorJ={colorJ}
            colorK={colorK}
            colorL={colorL}
            colorM={colorM}
            colorN={colorN}
            colorO={colorO}
            colorP={colorP}
            colorQ={colorQ}
            colorR={colorR}
            colorS={colorS}
            colorT={colorT}
            colorU={colorU}
            colorV={colorV}
            colorW={colorW}
            colorX={colorX}
            colorY={colorY}
            colorZ={colorZ}
          />

          <Box height="3vw" />
        </Box>
      )}
    </div>
  );

}

export default Play;
