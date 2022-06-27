import TopBarV2 from "./components/TopBarV2";
import {
  Box,
  HStack,
  VStack,
  Text,
  Center,
  Container,
  Flex,
  Spacer,
  Grid,
  GridItem,
  Textarea,
  Input,
  FormControl,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  FormLabel,
  Select,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "./InputQuestion.css";
import { Formik, Field } from "formik";
import { useState } from "react";

import { useCollection } from "./hooks/useCollection";

import { db } from "./firebase/config";
import { doc, deleteDoc } from "firebase/firestore"; // for deleting or updating documemts
import { collection, addDoc, setDoc, getDocs, query, where, updateDoc} from "firebase/firestore";

import QuestionList from "./QuestionList";
import { useAuthContext } from "./hooks/useAuthContext";

function InputQuestion() {
  const [modulecode, setModuleCode] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [explanation, setExplanation] = useState("");
  const [hint, setHint] = useState("");
  const [academicyear, setAcademicYear] = useState("");
  const [term, setTerm] = useState("");
  const [error, setError] = useState(null);
  const [PATH, setPATH] = useState("modules");

  const { user } = useAuthContext();

  const checkError = (answerInput, acadYear) => {
    if (answerInput.includes(" ")) {
      throw Error("Answer should be one word");
    }

    if (
      acadYear.includes("/") ||
      acadYear.includes(" ") ||
      !acadYear.includes("-") ||
      acadYear.length !== 5
    ) {
      throw Error(
        "Academic Year should be in the format 21-22 separated by a dash"
      );
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      checkError(answer, academicyear);

      //First reference to initial database
      const ref = collection(db, "questions");

      //Reference to second database
      const refTwo = collection(
        db,
        "modules",
        modulecode.toUpperCase(),
        academicyear,
        term,
        user.uid
      );

      // first argument is the ref that we want to add the object to
      // second argument is the actual object that we want to input into the ref

      await addDoc(ref, {
        module: modulecode.toUpperCase(),
        question: question.toUpperCase(),
        answer: answer.toUpperCase(),
        hint: hint.toUpperCase(),
        explanation: explanation.toUpperCase(),
        academicyear: academicyear,
        term: term,
        uid: user.uid,
        setBefore: false
      });

      //const q = query(ref, where("", "==", ""));

      // const q = query(collection(db, "questions"), where("uid", "==", user.uid));
      // const querySnapshot = await getDocs(q);
      // querySnapshot.forEach((docs) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(docs.id, " => ", docs.data());
      //   updateDoc(doc(db, "questions", docs.id), {qid: docs.id});
      // });


      await addDoc(
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
          setBefore: false
        },
        { merge: true }
      );

      setPATH("modules" + "/" + modulecode.toUpperCase() + "/" + academicyear  + "/" + term + "/" + user.uid);

      var array = [];
      const qModules = query(collection(db, "modules", modulecode.toUpperCase(), academicyear, term, user.uid), where("uid", "==", user.uid));
      const qModulesSnapshot = await getDocs(qModules);
      qModulesSnapshot.forEach((docs) => {
        array.push(docs.id);
      })

      const q = query(collection(db, "questions"), 
      where("uid", "==", user.uid), 
      where("module", "==", modulecode.toUpperCase()), 
      where("academicyear", "==", academicyear),
      where("term", "==", term));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((docs) => {
        updateDoc(doc(db, "questions", docs.id), {qid: array[0]});
        array.shift();
      });

      setModuleCode("");
      setQuestion("");
      setAnswer("");
      setExplanation("");
      setHint("");
      setAcademicYear("");
      setTerm("");
    } catch (e) {
      setError(e);
      console.error(e);
    }
  };


  // const handleDelete = async (id) => {
  //   console.log(id)

  //   // first argument is the database that we want to connet to
  //   // second argument is the specific collection
  //   // third arugment is the id of the document we want to reference to
  //   const docRef = doc(db, "questions", id);
  //   await deleteDoc(docRef);
  // };

  const { documents: questions } = useCollection("questions", [
    "uid",
    "==",
    user.uid,
  ]);
  
  const { documents: MODULES } = useCollection(
    PATH, [
        "uid",
        "==",
        user.uid
      ]
  );

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
                    <Field
                      as={Input}
                      id="modulecode"
                      name="modulecode"
                      variant="filled"
                      width="8.333vw"
                      placeholder="E.g. 21-22"
                      onChange={(e) => setAcademicYear(e.target.value)}
                      value={academicyear}
                      height="2vw"
                      fontSize="0.833vw"
                    />
                    {/* <FormControl isRequired> */}
                    <Select
                      variant="filled"
                      placeholder="Term"
                      width="8.333vw"
                      onChange={(e) => setTerm(e.target.value)}
                      value={term}
                      height="2vw"
                      fontSize="0.833vw"
                      iconSize="1vw"
                    >
                      <option>Semester 1</option>
                      <option>Semester 2</option>
                      <option>Special Term 1</option>
                      <option>Special Term 2</option>
                    </Select>
                    {/* </FormControl> */}
                    <Box
                      className="buttons"
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
                    >
                      Submit
                    </Box>
                  </HStack>
                </FormControl>
              </VStack>
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
                {/* {questions && (
                  <QuestionList questions={questions} modules={MODULES} path={PATH} />
                )}

                 */}
                 {MODULES && (
                  <QuestionList modules={MODULES} path={PATH} questions={questions}/>
                )}

              </Center>
            </Box>
          </Center>
        </GridItem>
      </Grid>
    </div>
  );
}
export default InputQuestion;
