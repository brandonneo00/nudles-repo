import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

function PopUp(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // It should be set to true initially, after user used up 6 tries or completed the question, set it to false
  return (
    <>
      <Button
        onClick={onOpen}
        isDisabled={props.completed}
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
        width="5.5vw"
        height="2.5vw"
        fontSize="1vw"
      >
        Answer
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered size="xl">
        <ModalOverlay />
        <ModalContent fontSize="1vw">
          <ModalHeader fontSize="1vw">Daily NUdleS</ModalHeader>
          <ModalHeader fontSize="1vw">Question</ModalHeader>
          <ModalBody>{props.chosenQuestion.question}</ModalBody>
          <ModalHeader fontSize="1vw">Answer</ModalHeader>
          <ModalBody>{props.chosenQuestion.answer}</ModalBody>
          <ModalHeader fontSize="1vw">Explanation</ModalHeader>
          <ModalBody>{props.chosenQuestion.explanation}</ModalBody>
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
              fontSize="1vw"
              width="8vw"
              height="2vw"
            >
              Slurping Out
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PopUp;
