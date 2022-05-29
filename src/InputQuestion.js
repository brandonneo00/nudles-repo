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
} from "@chakra-ui/react";

import "./InputQuestion.css";
import { Formik, Field } from "formik";
import { useState } from "react";

import { useCollection } from "./hooks/useCollection";

import { db } from "./firebase/config";
import { doc, deleteDoc } from "firebase/firestore"; // for deleting or updating documemts
import { collection, addDoc } from "firebase/firestore";

import QuestionList from "./QuestionList";
import { useAuthContext } from "./hooks/useAuthContext";

function InputQuestion() {
  const [modulecode, setModuleCode] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [explanation, setExplanation] = useState("");
  const { user } = useAuthContext();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   //place your function here to input into db
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ref = collection(db, "questions");
    // first argument is the ref that we want to add the object to
    // second argument is the actual object that we want to input into the ref

    await addDoc(ref, {
      module: modulecode.toUpperCase(),
      question: question.toUpperCase(),
      answer: answer.toUpperCase(),
      explanation: explanation.toUpperCase(),
      uid: user.uid,
    });

    setModuleCode("");
    setQuestion("");
    setAnswer("");
    setExplanation("");
  };

  const handleDelete = async (id) => {
    //console.log(id)

    // first argument is the database that we want to connet to
    // second argument is the specific collection
    // third arugment is the id of the document we want to reference to
    const docRef = doc(db, "questions", id);
    await deleteDoc(docRef);
  };

  const { documents: questions } = useCollection("questions", [
    "uid",
    "==",
    user.uid,
  ]);

  return (
    <div>
      <TopBarV2 />

      <Grid h="48.625rem">
        <GridItem bg="#E5E5E5" borderRadius="15px" margin="2%" padding="1.5%">
          <Formik>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl isRequired>
                  <HStack>
                    <Text
                      fontSize="24px"
                      fontWeight="semibold"
                      color="#000000"
                      width="220px"
                      lineHeight="2"
                      align="center"
                    >
                      MODULE CODE
                    </Text>
                    <Field
                      as={Input}
                      id="modulecode"
                      name="modulecode"
                      variant="filled"
                      placeholder="Module Code"
                      onChange={(e) => setModuleCode(e.target.value)}
                      value={modulecode}
                    />
                  </HStack>
                </FormControl>

                <FormControl isRequired>
                  <HStack>
                    <Text
                      fontSize="24px"
                      fontWeight="semibold"
                      color="#000000"
                      width="220px"
                      lineHeight="2"
                      align="center"
                    >
                      QUESTION
                    </Text>
                    <Field
                      as={Input}
                      id="question"
                      name="question"
                      placeholder="Question"
                      variant="filled"
                      onChange={(e) => setQuestion(e.target.value)}
                      value={question}
                    />
                  </HStack>
                </FormControl>

                <FormControl isRequired>
                  <HStack>
                    <Text
                      fontSize="24px"
                      fontWeight="semibold"
                      color="#000000"
                      width="220px"
                      lineHeight="2"
                      align="center"
                    >
                      ANSWER
                    </Text>
                    <Field
                      as={Input}
                      id="answer"
                      name="answer"
                      placeholder="Answer"
                      variant="filled"
                      onChange={(e) => setAnswer(e.target.value)}
                      value={answer}
                    />
                  </HStack>
                </FormControl>

                <FormControl isRequired>
                  <HStack>
                    <Text
                      fontSize="24px"
                      fontWeight="semibold"
                      color="#000000"
                      width="220px"
                      lineHeight="2"
                      align="center"
                    >
                      EXPLANATION
                    </Text>
                    <Field
                      as={Textarea}
                      id="explanation"
                      name="explanation"
                      placeholder="Input explanation here"
                      variant="filled"
                      onChange={(e) => setExplanation(e.target.value)}
                      value={explanation}
                    />
                  </HStack>
                </FormControl>
                <div className="add-box">
                  <Box
                    className="buttons"
                    as="button"
                    height="43px"
                    lineHeight="1.2"
                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                    border="0px"
                    width="230px"
                    borderRadius="15px"
                    fontSize="20px"
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
                </div>
              </VStack>
            </form>
          </Formik>

          <div className="wrap-box">
            <Center>
              <Box as="table">
                <VStack border="1px" borderColor="#000000" spacing="0">
                  <HStack border="1px" borderColor="black">
                    <Container className="container" width="140px">
                      <Text
                        fontSize="20px"
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
                      width="25rem"
                      centerContent
                    >
                      <Text
                        fontSize="20px"
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
                      width="12.5rem"
                      centerContent
                    >
                      <Text
                        fontSize="20px"
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
                      width="28.4375rem"
                      centerContent
                    >
                      <Text
                        fontSize="20px"
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
                      width="5.9rem"
                      centerContent
                    >
                      <Text
                        fontSize="20px"
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
                    {questions && <QuestionList questions={questions} />}
                  </Center>
                </VStack>
              </Box>
            </Center>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
}
export default InputQuestion;
