import TopBarV2 from "./components/TopBarV2";
import {
  Box,
  HStack,
  VStack,
  Text,
  Center,
  Container,
  Grid,
  GridItem,
  Textarea,
  Input,
  FormControl,
  Select,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  Checkbox,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import "./InputQuestion.css";
import { Formik, Field } from "formik";
import { useState } from "react";

import { useCollection } from "./hooks/useCollection";

import { db } from "./firebase/config";
import { doc } from "firebase/firestore"; // for deleting or updating documemts
import { collection, addDoc, setDoc } from "firebase/firestore";

import QuestionList from "./QuestionList";
import { useAuthContext } from "./hooks/useAuthContext";
import { useNusMods } from "./hooks/useNusMods";

function UpdateInputQuestion() {
  const [modulecode, setModuleCode] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [explanation, setExplanation] = useState("");
  const [hint, setHint] = useState("");
  const [academicyear, setAcademicYear] = useState("");
  const [term, setTerm] = useState("");
  const [error, setError] = useState(null);
  const [PATH, setPATH] = useState("modules");
  const [modulename, setModuleName] = useState("");
  const [clickCheckBox, setClickCheckBox] = useState(false);
  const [remember, setRemember] = useState(false);
  const { error1, usingapi, modExist } = useNusMods();

  const { user } = useAuthContext();

  const checkError = (answerInput) => {
    if (answerInput.includes(" ")) {
      throw Error("Answer should be one word");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    console.log(modExist + "this is modexist");

    try {
      checkError(answer);
      const name = await usingapi(academicyear, modulecode.toUpperCase());
      console.log(name + "15 july 11pm");

      if (name === null) {
        console.log("name is empty");
        if (modulename === "") {
          console.log("modulename is empty");
          throw Error(
            "Module does not exist on NUSMODs! Please click checkbox:)"
          );
        }
      } else {
        console.log("name is not empty");
        setModuleName(name);
      }

      console.log("Did not throw any error");

      //First reference to initial database
      const ref = collection(db, "questions");

      const qnDoc = await addDoc(ref, {
        module: modulecode.toUpperCase(),
        question: question.toUpperCase(),
        answer: answer.toUpperCase(),
        hint: hint.toUpperCase(),
        explanation: explanation.toUpperCase(),
        academicyear: academicyear,
        term: term,
        uid: user.uid,
        setBefore: false,
      });

      console.log(qnDoc.id + " This is qn id in qn collections");

      //Reference to second database
      const refTwo = doc(
        db,
        "modules",
        modulecode.toUpperCase(),
        academicyear,
        term,
        user.uid,
        qnDoc.id
      );

      await setDoc(
        refTwo,
        {
          module: modulecode.toUpperCase(),
          question: question.toUpperCase(),
          answer: answer.toUpperCase(),
          hint: hint.toUpperCase(),
          explanation: explanation.toUpperCase(),
          academicyear: academicyear,
          term: term,
          uid: user.uid,
          setBefore: false,
        },
        { merge: true }
      );

      //Reference to set the modulename for each module
      const refThree = doc(
        db,
        "modules",
        modulecode.toUpperCase(),
        academicyear,
        term
      );

      if (name !== null) {
        await setDoc(refThree, { [user.uid]: name }, { merge: true });
        console.log("Setting the name of the module to name");
      } else {
        //modulename is not empty
        await setDoc(refThree, { [user.uid]: modulename }, { merge: true });
        console.log("Setting the name of the module to modulename");
      }

      setPATH(
        "modules" +
          "/" +
          modulecode.toUpperCase() +
          "/" +
          academicyear +
          "/" +
          term +
          "/" +
          user.uid
      );

      if (remember) {
        setQuestion("");
        setAnswer("");
        setExplanation("");
        setHint("");
      } else {
        setModuleCode("");
        setQuestion("");
        setAnswer("");
        setExplanation("");
        setHint("");
        setAcademicYear("");
        setTerm("");
        setModuleName("");
        setClickCheckBox(false);
        setRemember(false);
      }
    } catch (error2) {
      console.log("inside handle submit block");
      console.log(error2 + " this is error2");
      setError(error2);
      console.error(error2);
    }
  };

  const { documents: questions } = useCollection("questions", [
    "uid",
    "==",
    user.uid,
  ]);

  const { documents: MODULES } = useCollection(PATH, ["uid", "==", user.uid]);

  return (
    <div>
      <TopBarV2 />

      <Grid>
        <GridItem bg="#E5E5E5" borderRadius="15px" margin="2%" padding="1.5%">
          <Formik>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl isRequired>
                  <HStack>
                    <Box minWidth="11.458vw">
                      <Text
                        fontSize="1.250vw"
                        fontWeight="semibold"
                        color="#000000"
                        lineHeight="2"
                        align="center"
                      >
                        MODULE CODE
                      </Text>
                    </Box>
                    <Field
                      as={Input}
                      id="modulecode"
                      name="modulecode"
                      variant="filled"
                      placeholder="Module Code"
                      onChange={(e) => setModuleCode(e.target.value)}
                      value={modulecode}
                      height="2vw"
                      fontSize="0.833vw"
                    />
                  </HStack>
                </FormControl>

                <FormControl isRequired>
                  <HStack>
                    <Box minWidth="11.458vw">
                      <Text
                        fontSize="1.250vw"
                        fontWeight="semibold"
                        color="#000000"
                        lineHeight="2"
                        align="center"
                      >
                        QUESTION
                      </Text>
                    </Box>
                    <Field
                      as={Input}
                      id="question"
                      name="question"
                      placeholder="Question"
                      variant="filled"
                      onChange={(e) => setQuestion(e.target.value)}
                      value={question}
                      height="2vw"
                      fontSize="0.833vw"
                    />
                  </HStack>
                </FormControl>

                <FormControl isRequired>
                  <HStack>
                    <Box minWidth="11.458vw">
                      <Text
                        fontSize="1.250vw"
                        fontWeight="semibold"
                        color="#000000"
                        lineHeight="2"
                        align="center"
                      >
                        ANSWER
                      </Text>
                    </Box>
                    <Field
                      as={Input}
                      id="answer"
                      name="answer"
                      placeholder="Answer"
                      variant="filled"
                      onChange={(e) => setAnswer(e.target.value)}
                      value={answer}
                      height="2vw"
                      fontSize="0.833vw"
                    />
                  </HStack>
                </FormControl>
                <FormControl isRequired>
                  <HStack>
                    <Box minWidth="11.458vw">
                      <Text
                        fontSize="1.250vw"
                        fontWeight="semibold"
                        color="#000000"
                        lineHeight="2"
                        align="center"
                      >
                        HINT
                      </Text>
                    </Box>
                    <Field
                      as={Input}
                      id="modulecode"
                      name="modulecode"
                      variant="filled"
                      placeholder="Hint"
                      onChange={(e) => setHint(e.target.value)}
                      value={hint}
                      height="2vw"
                      fontSize="0.833vw"
                    />
                  </HStack>
                </FormControl>

                <FormControl isRequired>
                  <HStack>
                    <Box minWidth="11.458vw">
                      <Text
                        fontSize="1.250vw"
                        fontWeight="semibold"
                        color="#000000"
                        lineHeight="2"
                        align="center"
                      >
                        EXPLANATION
                      </Text>
                    </Box>
                    <Field
                      as={Textarea}
                      id="explanation"
                      name="explanation"
                      placeholder="Input explanation here"
                      variant="filled"
                      onChange={(e) => setExplanation(e.target.value)}
                      value={explanation}
                      height="2vw"
                      fontSize="0.833vw"
                    />
                  </HStack>
                </FormControl>

                <FormControl isRequired>
                  <HStack alignItems="center">
                    <Box minWidth="11.458vw">
                      <Text
                        fontSize="1.250vw"
                        fontWeight="semibold"
                        color="#000000"
                        lineHeight="1.3"
                        align="center"
                      >
                        ACADEMIC YEAR
                      </Text>
                    </Box>

                    <Select
                      variant="filled"
                      placeholder="Academic Year"
                      width="11vw"
                      onChange={(e) => setAcademicYear(e.target.value)}
                      value={academicyear}
                      height="2vw"
                      fontSize="1.2vw"
                      iconSize="1vw"
                      isRequired
                    >
                      <option>20-21</option>
                      <option>21-22</option>
                      <option>22-23</option>
                    </Select>
                    <Select
                      variant="filled"
                      placeholder="Term"
                      width="8.333vw"
                      onChange={(e) => setTerm(e.target.value)}
                      value={term}
                      height="2vw"
                      fontSize="1.2vw"
                      iconSize="1vw"
                    >
                      <option>Semester 1</option>
                      <option>Semester 2</option>
                      <option>Special Term 1</option>
                      <option>Special Term 2</option>
                    </Select>
                  </HStack>
                </FormControl>

                <HStack spacing="1vw">
                  <Box minWidth="11.458vw" />
                  <FormControl isRequired={!modExist}>
                    <Checkbox
                      size="lg"
                      colorScheme="orange"
                      borderColor="#000000"
                      onChange={() => {
                        setClickCheckBox(!clickCheckBox);
                      }}
                      isChecked={clickCheckBox}
                    >
                      <Text
                        fontSize="1vw"
                        fontWeight="semibold"
                        color="red"
                        lineHeight="2"
                        align="center"
                      >
                        Please tick the box if module not found on NUSMODs
                      </Text>
                    </Checkbox>
                  </FormControl>
                  <FormControl>
                    <Checkbox
                      align="center"
                      size="lg"
                      colorScheme="orange"
                      borderColor="#000000"
                      onChange={() => {
                        setRemember(!remember);
                      }}
                      isChecked={remember}
                    >
                      <Text
                        fontSize="1vw"
                        fontWeight="semibold"
                        color="black"
                        lineHeight="2"
                        align="center"
                        width="30vw"
                      >
                        Remember Fields (For Module Code, Module Name, AY &
                        Term)
                      </Text>
                    </Checkbox>
                  </FormControl>
                </HStack>

                {clickCheckBox && (
                  <>
                    <FormControl isRequired={!modExist}>
                      <HStack>
                        <Box minWidth="11.458vw">
                          <Text
                            fontSize="1.250vw"
                            fontWeight="semibold"
                            color="#000000"
                            lineHeight="2"
                            align="center"
                          >
                            MODULE NAME
                          </Text>
                        </Box>
                        <Field
                          as={Input}
                          id="modulename"
                          name="modulename"
                          placeholder="Input Module Name"
                          variant="filled"
                          onChange={(e) => setModuleName(e.target.value)}
                          value={modulename}
                          height="2vw"
                          fontSize="0.833vw"
                        ></Field>
                      </HStack>
                    </FormControl>
                    <HStack>
                      <Box minWidth="11.458vw" />
                      <Text
                        as="i"
                        fontSize="1vw"
                        fontWeight="regular"
                        align="left"
                      >
                        Note: Naming of Modules will be based on the following
                        priority:
                        <br></br>
                        1. Can be fetched from NUSMODs based on AY & Module Code
                        <br></br>
                        2. Most Recent input for Module Name field (If cannot be
                        fetched from NUSMODs)
                      </Text>
                    </HStack>
                  </>
                )}
              </VStack>
              <Flex marginTop="1vw">
                <Box />
                <Spacer />
                <Box
                  as="button"
                  height="2.240vw"
                  lineHeight="1.2"
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  border="0px"
                  width="11.979vw"
                  borderRadius="15px"
                  fontSize="1.042vw"
                  fontWeight="semibold"
                  bg="#83C5BE"
                  borderColor="#ccd0d5"
                  color="#000000"
                  _hover={{ bg: "#63B7AE" }}
                  _active={{
                    bg: "#dddfe2",
                    transform: "scale(0.98)",
                  }}
                  _focus={{
                    boxShadow:
                      "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                  }}
                  position="relative"
                  right="0%"
                >
                  Submit
                </Box>
              </Flex>
            </form>
          </Formik>
          <Center margin="1.5% 0%" height="2vw">
            {error && (
              <Alert
                status="error"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                fontSize="md"
              >
                <AlertIcon />
                <AlertTitle>Error: </AlertTitle>
                <AlertDescription>{error.message}</AlertDescription>
              </Alert>
            )}
          </Center>

          <Center>
            <Box border="1px" borderColor="black">
              <HStack border="1px" borderColor="black" spacing={0}>
                <Container
                  className="container"
                  width="6vw"
                  marginLeft="0px"
                  centerContent
                  padding={0}
                  marginRight={0}
                >
                  <Text
                    fontSize="1.042vw"
                    fontWeight="semibold"
                    color="#000000"
                    lineHeight="1.3"
                    align="center"
                  >
                    MODULE CODE
                  </Text>
                </Container>
                <Container
                  className="container"
                  width="20vw"
                  centerContent
                  marginLeft="0px"
                  padding={0}
                >
                  <Text
                    fontSize="1.042vw"
                    fontWeight="semibold"
                    color="#000000"
                    lineHeight="1.3"
                    align="center"
                  >
                    QUESTION
                  </Text>
                </Container>
                <Container
                  className="container"
                  width="10vw"
                  centerContent
                  padding={0}
                >
                  <Text
                    fontSize="1.042vw"
                    fontWeight="semibold"
                    color="#000000"
                    lineHeight="1.3"
                    align="center"
                  >
                    ANSWER
                  </Text>
                </Container>
                <Container
                  className="container"
                  width="12vw"
                  centerContent
                  padding={0}
                >
                  <Text
                    fontSize="1.042vw"
                    fontWeight="semibold"
                    color="#000000"
                    lineHeight="1.3"
                    align="center"
                  >
                    HINT
                  </Text>
                </Container>
                <Container
                  className="container"
                  width="25vw"
                  centerContent
                  padding={0}
                >
                  <Text
                    fontSize="1.042vw"
                    fontWeight="semibold"
                    color="#000000"
                    lineHeight="1.3"
                    align="center"
                  >
                    EXPLANATION
                  </Text>
                </Container>
                <Container
                  className="container"
                  width="5vw"
                  centerContent
                  padding={0}
                >
                  <Text
                    fontSize="1.042vw"
                    fontWeight="semibold"
                    color="#000000"
                    lineHeight="1.3"
                    align="center"
                  >
                    AY
                  </Text>
                </Container>
                <Container
                  className="container"
                  width="7.500vw"
                  centerContent
                  padding={0}
                >
                  <Text
                    fontSize="1.042vw"
                    fontWeight="semibold"
                    color="#000000"
                    lineHeight="1.3"
                    align="center"
                  >
                    TERM
                  </Text>
                </Container>
                <Container
                  className="container"
                  width="6vw"
                  centerContent
                  padding={0}
                >
                  <Text
                    fontSize="1.042vw"
                    fontWeight="semibold"
                    color="#000000"
                    lineHeight="1.3"
                    align="center"
                  >
                    DELETE
                  </Text>
                </Container>
              </HStack>

              <Center>
                {MODULES && (
                  <QuestionList
                    modules={MODULES}
                    path={PATH}
                    questions={questions}
                  />
                )}
              </Center>
            </Box>
          </Center>
        </GridItem>
      </Grid>
    </div>
  );
}
export default UpdateInputQuestion;
