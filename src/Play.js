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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import GuessBox from "./GuessBox";
import { useRef, useState } from "react";
import PopUp from "./components/PopUp";
import PopOver from "./components/PopOver";
import AnswerChecker from "./components/AnswerChecker";
import KeyboardV2 from "./KeyboardV2";
import KeyboardV3 from "./KeyboardV3";

function Play() {
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

  const greenColor = "#6AAA64";
  const orangeColor = "#F7B556";
  const greyColor = "#787E7E";

  var ansLength = 5;

  //Checks the User's Input for error
  const checkError = (userInput) => {
    if (userInput.includes(" ")) {
      throw Error("Invalid Input");
    } else if (userInput.length > ansLength) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!solved) {
      try {
        if (!disableBox1) {
          checkError(input1);
          setBox1(true);
          paintingKeys(input1, "HELLO");
          stopAfterCorrect(input1, "HELLO", setBox2);
        } else if (!disableBox2) {
          checkError(input2);
          setBox2(true);
          paintingKeys(input2, "HELLO");
          stopAfterCorrect(input2, "HELLO", setBox3);
        } else if (!disableBox3) {
          checkError(input3);
          setBox3(true);
          paintingKeys(input3, "HELLO");
          stopAfterCorrect(input3, "HELLO", setBox4);
        } else if (!disableBox4) {
          checkError(input4);
          setBox4(true);
          paintingKeys(input4, "HELLO");
          stopAfterCorrect(input4, "HELLO", setBox5);
        } else if (!disableBox5) {
          checkError(input5);
          setBox5(true);
          paintingKeys(input5, "HELLO");
          stopAfterCorrect(input5, "HELLO", setBox6);
        } else {
          checkError(input6);
          setBox6(true);
          paintingKeys(input6, "HELLO");
          stopAfterCorrect(input6, "HELLO", null);
          console.log("Done with 6 tries!");
        }
      } catch (e) {
        setError(e);
        console.error(e);
      }
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
            paintingKeys(input1, "HELLO");
            stopAfterCorrect(input1, "HELLO", setBox2);
          } else if (!disableBox2) {
            checkError(input2);
            setBox2(true);
            paintingKeys(input2, "HELLO");
            stopAfterCorrect(input2, "HELLO", setBox3);
          } else if (!disableBox3) {
            checkError(input3);
            setBox3(true);
            paintingKeys(input3, "HELLO");
            stopAfterCorrect(input3, "HELLO", setBox4);
          } else if (!disableBox4) {
            checkError(input4);
            setBox4(true);
            paintingKeys(input4, "HELLO");
            stopAfterCorrect(input4, "HELLO", setBox5);
          } else if (!disableBox5) {
            checkError(input5);
            setBox5(true);
            paintingKeys(input5, "HELLO");
            stopAfterCorrect(input5, "HELLO", setBox6);
          } else {
            checkError(input6);
            setBox6(true);
            paintingKeys(input6, "HELLO");
            stopAfterCorrect(input6, "HELLO", null);
            console.log("Done with 6 tries!");
          }
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

  return (
    <div>
      <TopBarV2 />

      <Grid>
        <GridItem
          bg="#E5E5E5"
          borderRadius="15px"
          margin="2% 2% 1%"
          padding="1.5%"
        >
          <Text as="u" align="left" fontSize="1.500vw" fontWeight="bold">
            Question
          </Text>
          <Text align="left" fontSize="1.250vw" fontWeight="bold">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
            pretium justo, at bibendum orci. Quisque turpis tortor, viverra sit
            amet felis eget, lacinia porttitor neque. Morbi sodales volutpat
            arcu, a sollicitudin neque porta sit amet. Fusce eget condimentum
            dui. Curabitur posuere vehicula molestie. Sed commodo maximus odio
            quis mollis.
          </Text>

          <Box textAlign="right" marginTop="1rem">
            <PopOver threeTries={disableBox4 && !solved} />
            <PopUp completed={!solved} />
          </Box>

          <Box>
            {" "}
            <Text fontSize="1.250vw" fontWeight="bold">
              {" "}
              No. of letters in answer: {5}
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
            // width="500px"
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
                <HStack spacing={0}> {textCreator(input1, "HELLO")} </HStack>
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
                <HStack spacing={0}> {textCreator(input2, "HELLO")} </HStack>
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
                <HStack spacing={0}> {textCreator(input3, "HELLO")} </HStack>
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
                <HStack spacing={0}> {textCreator(input4, "HELLO")} </HStack>
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
                <HStack spacing={0}> {textCreator(input5, "HELLO")} </HStack>
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
                <HStack spacing={0}> {textCreator(input6, "HELLO")} </HStack>
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

      {/* <Center>
        {error && (
          <Alert
            status="error"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            marginTop="1rem"
            fontSize="md"
            width="500px"
          >
            <AlertIcon />
            <AlertTitle>Error: </AlertTitle>
            <AlertDescription>{error.message}</AlertDescription>
          </Alert>
        )}
      </Center> */}

      {/* {error && (
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Error</ModalHeader>
          <ModalBody>{error.message}</ModalBody>
          <ModalFooter>
            <Button
              onClick={onClose}
              bg="#F7B556"
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
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> 
)} */}
      <Box height="3vw" />
    </div>
  );
}

export default Play;
