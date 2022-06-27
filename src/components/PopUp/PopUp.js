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
      >
        Answer
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Daily NUdleS</ModalHeader>
          <ModalHeader>Question</ModalHeader>
          <ModalBody>{props.chosenQuestion.question}</ModalBody>
          <ModalHeader>Answer</ModalHeader>
          <ModalBody>{props.chosenQuestion.answer}</ModalBody>
          <ModalHeader>Explanation</ModalHeader>
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
