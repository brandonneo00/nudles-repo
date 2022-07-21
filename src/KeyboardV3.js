import { Box, HStack, VStack, Text } from "@chakra-ui/react";

function KeyboardV3(props) {
  function KeyboardButton(args) {
    return (
      <Box
        className={"Key" + args.name}
        as="button"
        height="3vw"
        lineHeight="1.2"
        borderRadius="5px"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        border="3px"
        width={args.width}
        fontSize={args.fontSizing}
        fontWeight="semibold"
        bg={args.tone}
        borderColor="black"
        color="#000000"
        _hover={{ bg: "#B4B4B4" }}
        _active={{
          bg: "#dddfe2",
          transform: "scale(0.98)",
        }}
        _focus={{
          boxShadow:
            "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        }}
        onClick={args.clicking}
      >
        <Text> {args.name} </Text>
      </Box>
    );
  }
  return (
    <VStack marginBottom="0.5%" spacing="0.4vw">
      <HStack spacing="0.4vw">
        <KeyboardButton
          name="1"
          key={-10}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorOne}
        />
        <KeyboardButton
          name="2"
          key={-9}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorTwo}
        />
        <KeyboardButton
          name="3"
          key={-8}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorThree}
        />
        <KeyboardButton
          name="4"
          key={-7}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorFour}
        />
        <KeyboardButton
          name="5"
          key={-6}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorFive}
        />
        <KeyboardButton
          name="6"
          key={-5}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorSix}
        />
        <KeyboardButton
          name="7"
          key={-4}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorSeven}
        />
        <KeyboardButton
          name="8"
          key={-3}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorEight}
        />
        <KeyboardButton
          name="9"
          key={-2}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorNine}
        />
        <KeyboardButton
          name="0"
          key={-1}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorZero}
        />
      </HStack>
      <HStack spacing="0.4vw">
        <KeyboardButton
          name="Q"
          key={0}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorQ}
        />
        <KeyboardButton
          name="W"
          key={1}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorW}
        />
        <KeyboardButton
          name="E"
          key={2}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorE}
        />
        <KeyboardButton
          name="R"
          key={3}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorR}
        />
        <KeyboardButton
          name="T"
          key={4}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorT}
        />
        <KeyboardButton
          name="Y"
          key={5}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorY}
        />
        <KeyboardButton
          name="U"
          key={6}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorU}
        />
        <KeyboardButton
          name="I"
          key={7}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorI}
        />
        <KeyboardButton
          name="O"
          key={8}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorO}
        />
        <KeyboardButton
          name="P"
          key={9}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorP}
        />
      </HStack>

      {/* SECOND ROW */}
      <HStack spacing="0.4vw">
        <KeyboardButton
          name="A"
          key={10}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorA}
        />
        <KeyboardButton
          name="S"
          key={11}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorS}
        />
        <KeyboardButton
          name="D"
          key={12}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorD}
        />
        <KeyboardButton
          name="F"
          key={13}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorF}
        />
        <KeyboardButton
          name="G"
          key={14}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorG}
        />
        <KeyboardButton
          name="H"
          key={15}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorH}
        />
        <KeyboardButton
          name="J"
          key={16}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorJ}
        />
        <KeyboardButton
          name="K"
          key={17}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorK}
        />
        <KeyboardButton
          name="L"
          key={18}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorL}
        />
      </HStack>

      {/* Last Row  */}
      <HStack spacing="0.4vw">
        <KeyboardButton
          name="ENTER"
          key={19}
          clicking={props.manualClick}
          width="3.438vw"
          fontSizing="0.833vw"
          tone="#E5E5E5"
        />
        <KeyboardButton
          name="Z"
          key={20}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorZ}
        />
        <KeyboardButton
          name="X"
          key={21}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorX}
        />
        <KeyboardButton
          name="C"
          key={22}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorC}
        />
        <KeyboardButton
          name="V"
          key={23}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorV}
        />
        <KeyboardButton
          name="B"
          key={24}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorB}
        />
        <KeyboardButton
          name="N"
          key={25}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorN}
        />
        <KeyboardButton
          name="M"
          key={26}
          clicking={props.manualClick}
          width="2.24vw"
          fontSizing="0.833vw"
          tone={props.colorM}
        />
        <KeyboardButton
          name="⌫"
          key={27}
          clicking={props.manualClick}
          width="3.438vw"
          fontSizing="1.250vw"
          tone="#E5E5E5"
        />
      </HStack>
    </VStack>
  );
}

export default KeyboardV3;
