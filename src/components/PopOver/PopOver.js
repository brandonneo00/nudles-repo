import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
} from "@chakra-ui/react";
import React from "react";

function PopOver(props) {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          marginRight="0.833vw"
          isDisabled={props.threeTries}
          bg="#ffffff"
          _hover={{ bg: "#F2F2F2" }}
          _active={{
            bg: "#ffffff",
            transform: "scale(0.98)",
            borderColor: "",
          }}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
        >
          Hint
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontWeight="bold" textAlign="left">
          A Little Hint
        </PopoverHeader>
        <PopoverBody textAlign="left">
          Insert Hint Text Here Please Thank You!
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default PopOver;
