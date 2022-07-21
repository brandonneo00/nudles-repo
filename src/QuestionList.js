//firebase imports
import { db } from "./firebase/config";
import { doc, deleteDoc } from "firebase/firestore"; // for deleting or updating documemts
import {
  Box,
  HStack,
  Container,
  Button,
  Image,
  IconButton,
  Text,
} from "@chakra-ui/react";
import bin from "./images/bin.png";

export default function QuestionList(props) {
  const handleDelete = async (id) => {
    console.log(id);

    // first argument is the database that we want to connect to
    // second argument is the specific collection
    // third arugment is the id of the document we want to reference to

    const docRef = doc(db, "questions", id);
    await deleteDoc(docRef);

    const secondDocRef = doc(db, props.path, id);
    await deleteDoc(secondDocRef);
  };

  return (
    <Box overflowY="scroll" maxHeight="40vw">
      {props.questions.map((question, index) => (
        <HStack
          border="1px"
          borderColor="black"
          marginTop="0px"
          spacing={0}
          key={index}
        >
          <Container
            className="container"
            width="6vw"
            centerContent={true}
            padding={0}
          >
            <Text fontSize="1.042vw" textAlign="center">
              {question.module}
            </Text>
          </Container>
          <Container
            className="container"
            width="20vw"
            centerContent={true}
            padding={0}
          >
            <Text fontSize="1.042vw" textAlign="center">
              {question.question}
            </Text>
          </Container>
          <Container
            className="container"
            width="10vw"
            centerContent={true}
            padding={0}
          >
            <Text fontSize="1.042vw" textAlign="center">
              {question.answer}
            </Text>
          </Container>
          <Container
            className="container"
            width="12vw"
            centerContent={true}
            padding={0}
          >
            <Text fontSize="1.042vw" textAlign="center">
              {question.hint}
            </Text>
          </Container>
          <Container
            className="container"
            width="25vw"
            centerContent={true}
            padding={0}
          >
            <Text fontSize="1.042vw" textAlign="center">
              {question.explanation}
            </Text>
          </Container>
          <Container
            className="container"
            width="5vw"
            centerContent={true}
            padding={0}
          >
            <Text fontSize="1.042vw" textAlign="center">
              {question.academicyear}
            </Text>
          </Container>
          <Container
            className="container"
            width="7.500vw"
            centerContent={true}
            padding={0}
          >
            <Text fontSize="1.042vw" textAlign="center">
              {" "}
              {question.term}
            </Text>
          </Container>

          <Button
            className="delete-button"
            onClick={() => handleDelete(question.id)}
            as={IconButton}
            variant="ghost"
            icon={
              <Box>
                <Image src={bin} alt="delete-logo" boxSize="2vw" />
              </Box>
            }
            boxSize="6vw"
            borderWidth="0px"
            bg="#ffffff00"
            _hover={{ bg: "#ffffff00" }}
            _active={{
              bg: "#ffffff00",
              transform: "scale(0.98)",
            }}
            padding={0}
          ></Button>
        </HStack>
      ))}
    </Box>
  );
}
