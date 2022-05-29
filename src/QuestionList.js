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
} from "@chakra-ui/react";
import bin from "./images/bin.png";

export default function QuestionList({ questions }) {
  const handleDelete = async (id) => {
    //console.log(id)

    // first argument is the database that we want to connect to
    // second argument is the specific collection
    // third arugment is the id of the document we want to reference to
    const docRef = doc(db, "questions", id);
    await deleteDoc(docRef);
  };

  return (
    <div>
      {questions.map((question) => (
        <HStack border="1px" borderColor="black" marginTop="0px">
          <Container className="container" width="140px" centerContent>
            {question.module}
          </Container>
          <Container className="container" width="400px" centerContent>
            {question.question}
          </Container>
          <Container className="container" width="200px" centerContent>
            {question.answer}
          </Container>
          <Container className="container" width="455px" centerContent>
            {question.explanation}
          </Container>

          <Button
            className="delete-button"
            onClick={() => handleDelete(question.id)}
            as={IconButton}
            variant="ghost"
            icon={
              <Box>
                <Image src={bin} alt="delete-logo" boxSize="3em" />
              </Box>
            }
            boxSize="5.9em"
            borderWidth="0px"
            bg="#ffffff00"
            _hover={{ bg: "#ffffff00" }}
            _active={{
              bg: "#ffffff00",
              transform: "scale(0.98)",
            }}
          ></Button>
        </HStack>
      ))}
    </div>
  );
}
