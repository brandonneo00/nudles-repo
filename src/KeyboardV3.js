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
} from "@chakra-ui/react";


import { useState } from "react";

function KeyboardV3(props) {
  // const [colorA, setColorA] = useState("#E5E5E5");
  // const [colorB, setColorB] = useState("#E5E5E5");
  // const [colorC, setColorC] = useState("#E5E5E5");
  // const [colorD, setColorD] = useState("#E5E5E5");
  // const [colorE, setColorE] = useState("#E5E5E5");
  // const [colorF, setColorF] = useState("#E5E5E5");
  // const [colorG, setColorG] = useState("#E5E5E5");
  // const [colorH, setColorH] = useState("#E5E5E5");
  // const [colorI, setColorI] = useState("#E5E5E5");
  // const [colorJ, setColorJ] = useState("#E5E5E5");
  // const [colorK, setColorK] = useState("#E5E5E5");
  // const [colorL, setColorL] = useState("#E5E5E5");
  // const [colorM, setColorM] = useState("#E5E5E5");
  // const [colorN, setColorN] = useState("#E5E5E5");
  // const [colorO, setColorO] = useState("#E5E5E5");
  // const [colorP, setColorP] = useState("#E5E5E5");
  // const [colorQ, setColorQ] = useState("#E5E5E5");
  // const [colorR, setColorR] = useState("#E5E5E5");
  // const [colorS, setColorS] = useState("#E5E5E5");
  // const [colorT, setColorT] = useState("#E5E5E5");
  // const [colorU, setColorU] = useState("#E5E5E5");
  // const [colorV, setColorV] = useState("#E5E5E5");
  // const [colorW, setColorW] = useState("#E5E5E5");
  // const [colorX, setColorX] = useState("#E5E5E5");
  // const [colorY, setColorY] = useState("#E5E5E5");
  // const [colorZ, setColorZ] = useState("#E5E5E5");

  // const greenColor = "#6AAA64";
  // const orangeColor = "#F7B556";
  // const greyColor = "#787E7E";

  // function colorCodingGreen(alphabet) {
  //   if (alphabet === "A") {
  //     setColorA(greenColor);
  //   } else if (alphabet === "B") {
  //     setColorB(greenColor);
  //   } else if (alphabet === "C") {
  //     setColorC(greenColor);
  //   } else if (alphabet === "D") {
  //     setColorD(greenColor);
  //   } else if (alphabet === "E") {
  //     setColorE(greenColor);
  //   } else if (alphabet === "F") {
  //     setColorF(greenColor);
  //   } else if (alphabet === "G") {
  //     setColorG(greenColor);
  //   } else if (alphabet === "H") {
  //     setColorH(greenColor);
  //   } else if (alphabet === "I") {
  //     setColorI(greenColor);
  //   } else if (alphabet === "J") {
  //     setColorJ(greenColor);
  //   } else if (alphabet === "K") {
  //     setColorK(greenColor);
  //   } else if (alphabet === "L") {
  //     setColorL(greenColor);
  //   } else if (alphabet === "M") {
  //     setColorM(greenColor);
  //   } else if (alphabet === "N") {
  //     setColorN(greenColor);
  //   } else if (alphabet === "O") {
  //     setColorO(greenColor);
  //   } else if (alphabet === "P") {
  //     setColorP(greenColor);
  //   } else if (alphabet === "Q") {
  //     setColorQ(greenColor);
  //   } else if (alphabet === "R") {
  //     setColorR(greenColor);
  //   } else if (alphabet === "S") {
  //     setColorS(greenColor);
  //   } else if (alphabet === "T") {
  //     setColorT(greenColor);
  //   } else if (alphabet === "U") {
  //     setColorU(greenColor);
  //   } else if (alphabet === "V") {
  //     setColorV(greenColor);
  //   } else if (alphabet === "W") {
  //     setColorW(greenColor);
  //   } else if (alphabet === "X") {
  //     setColorX(greenColor);
  //   } else if (alphabet === "Y") {
  //     setColorY(greenColor);
  //   } else if (alphabet === "Z") {
  //     setColorZ(greenColor);
  //   }
  // }

  // function colorCodingOrange(alphabet) {
  //   if (alphabet === "A") {
  //     setColorA(orangeColor);
  //   } else if (alphabet === "B") {
  //     setColorB(orangeColor);
  //   } else if (alphabet === "C") {
  //     setColorC(orangeColor);
  //   } else if (alphabet === "D") {
  //     setColorD(orangeColor);
  //   } else if (alphabet === "E") {
  //     setColorE(orangeColor);
  //   } else if (alphabet === "F") {
  //     setColorF(orangeColor);
  //   } else if (alphabet === "G") {
  //     setColorG(orangeColor);
  //   } else if (alphabet === "H") {
  //     setColorH(orangeColor);
  //   } else if (alphabet === "I") {
  //     setColorI(orangeColor);
  //   } else if (alphabet === "J") {
  //     setColorJ(orangeColor);
  //   } else if (alphabet === "K") {
  //     setColorK(orangeColor);
  //   } else if (alphabet === "L") {
  //     setColorL(orangeColor);
  //   } else if (alphabet === "M") {
  //     setColorM(orangeColor);
  //   } else if (alphabet === "N") {
  //     setColorN(orangeColor);
  //   } else if (alphabet === "O") {
  //     setColorO(orangeColor);
  //   } else if (alphabet === "P") {
  //     setColorP(orangeColor);
  //   } else if (alphabet === "Q") {
  //     setColorQ(orangeColor);
  //   } else if (alphabet === "R") {
  //     setColorR(orangeColor);
  //   } else if (alphabet === "S") {
  //     setColorS(orangeColor);
  //   } else if (alphabet === "T") {
  //     setColorT(orangeColor);
  //   } else if (alphabet === "U") {
  //     setColorU(orangeColor);
  //   } else if (alphabet === "V") {
  //     setColorV(orangeColor);
  //   } else if (alphabet === "W") {
  //     setColorW(orangeColor);
  //   } else if (alphabet === "X") {
  //     setColorX(orangeColor);
  //   } else if (alphabet === "Y") {
  //     setColorY(orangeColor);
  //   } else if (alphabet === "Z") {
  //     setColorZ(orangeColor);
  //   }
  // }

  // function colorCodingGrey(alphabet) {
  //   if (alphabet === "A") {
  //     setColorA(greyColor);
  //   } else if (alphabet === "B") {
  //     setColorB(greyColor);
  //   } else if (alphabet === "C") {
  //     setColorC(greyColor);
  //   } else if (alphabet === "D") {
  //     setColorD(greyColor);
  //   } else if (alphabet === "E") {
  //     setColorE(greyColor);
  //   } else if (alphabet === "F") {
  //     setColorF(greyColor);
  //   } else if (alphabet === "G") {
  //     setColorG(greyColor);
  //   } else if (alphabet === "H") {
  //     setColorH(greyColor);
  //   } else if (alphabet === "I") {
  //     setColorI(greyColor);
  //   } else if (alphabet === "J") {
  //     setColorJ(greyColor);
  //   } else if (alphabet === "K") {
  //     setColorK(greyColor);
  //   } else if (alphabet === "L") {
  //     setColorL(greyColor);
  //   } else if (alphabet === "M") {
  //     setColorM(greyColor);
  //   } else if (alphabet === "N") {
  //     setColorN(greyColor);
  //   } else if (alphabet === "O") {
  //     setColorO(greyColor);
  //   } else if (alphabet === "P") {
  //     setColorP(greyColor);
  //   } else if (alphabet === "Q") {
  //     setColorQ(greyColor);
  //   } else if (alphabet === "R") {
  //     setColorR(greyColor);
  //   } else if (alphabet === "S") {
  //     setColorS(greyColor);
  //   } else if (alphabet === "T") {
  //     setColorT(greyColor);
  //   } else if (alphabet === "U") {
  //     setColorU(greyColor);
  //   } else if (alphabet === "V") {
  //     setColorV(greyColor);
  //   } else if (alphabet === "W") {
  //     setColorW(greyColor);
  //   } else if (alphabet === "X") {
  //     setColorX(greyColor);
  //   } else if (alphabet === "Y") {
  //     setColorY(greyColor);
  //   } else if (alphabet === "Z") {
  //     setColorZ(greyColor);
  //   }
  // }

  function KeyboardButton(args) {
    return (
      <Box
        className={"Key" + args.name}
        as="button"
        height="58px"
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
    <VStack marginBottom="0.5%">
      <HStack>
        <KeyboardButton
          name="Q"
          key={0}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorQ}
        />
        <KeyboardButton
          name="W"
          key={1}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorW}
        />
        <KeyboardButton
          name="E"
          key={2}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorE}
        />
        <KeyboardButton
          name="R"
          key={3}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorR}
        />
        <KeyboardButton
          name="T"
          key={4}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorT}
        />
        <KeyboardButton
          name="Y"
          key={5}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorY}
        />
        <KeyboardButton
          name="U"
          key={6}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorU}
        />
        <KeyboardButton
          name="I"
          key={7}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorI}
        />
        <KeyboardButton
          name="O"
          key={8}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorO}
        />
        <KeyboardButton
          name="P"
          key={9}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorP}
        />
      </HStack>

      {/* SECOND ROW */}
      <HStack>
        <KeyboardButton
          name="A"
          key={10}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorA}
        />
        <KeyboardButton
          name="S"
          key={11}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorS}
        />
        <KeyboardButton
          name="D"
          key={12}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorD}
        />
        <KeyboardButton
          name="F"
          key={13}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorF}
        />
        <KeyboardButton
          name="G"
          key={14}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorG}
        />
        <KeyboardButton
          name="H"
          key={15}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorH}
        />
        <KeyboardButton
          name="J"
          key={16}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorJ}
        />
        <KeyboardButton
          name="K"
          key={17}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorK}
        />
        <KeyboardButton
          name="L"
          key={18}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorL}
        />
      </HStack>

      {/* Last Row  */}
      <HStack>
        <KeyboardButton
          name="ENTER"
          key={19}
          clicking={props.manualClick}
          width="66px"
          fontSizing="16px"
          tone="#E5E5E5"
        />
        <KeyboardButton
          name="Z"
          key={20}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorZ}
        />
        <KeyboardButton
          name="X"
          key={21}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorX}
        />
        <KeyboardButton
          name="C"
          key={22}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorC}
        />
        <KeyboardButton
          name="V"
          key={23}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorV}
        />
        <KeyboardButton
          name="B"
          key={24}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorB}
        />
        <KeyboardButton
          name="N"
          key={25}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorN}
        />
        <KeyboardButton
          name="M"
          key={26}
          clicking={props.manualClick}
          width="43px"
          fontSizing="16px"
          tone={props.colorM}
        />
        <KeyboardButton
          name="⌫"
          key={27}
          clicking={props.manualClick}
          width="66px"
          fontSizing="24px"
          tone="#E5E5E5"
        />
      </HStack>
    </VStack>
  );
  // return (
  //   <VStack>
  //     <HStack>
  //       <KeyboardButton
  //         name="Q"
  //         key={0}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorQ}
  //       />
  //       <KeyboardButton
  //         name="W"
  //         key={1}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorW}
  //       />
  //       <KeyboardButton
  //         name="E"
  //         key={2}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorE}
  //       />
  //       <KeyboardButton
  //         name="R"
  //         key={3}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorR}
  //       />
  //       <KeyboardButton
  //         name="T"
  //         key={4}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorT}
  //       />
  //       <KeyboardButton
  //         name="Y"
  //         key={5}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorY}
  //       />
  //       <KeyboardButton
  //         name="U"
  //         key={6}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorU}
  //       />
  //       <KeyboardButton
  //         name="I"
  //         key={7}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorI}
  //       />
  //       <KeyboardButton
  //         name="O"
  //         key={8}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorO}
  //       />
  //       <KeyboardButton
  //         name="P"
  //         key={9}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorP}
  //       />
  //     </HStack>

  //     {/* SECOND ROW */}
  //     <HStack>
  //       <KeyboardButton
  //         name="A"
  //         key={10}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorA}
  //       />
  //       <KeyboardButton
  //         name="S"
  //         key={11}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorS}
  //       />
  //       <KeyboardButton
  //         name="D"
  //         key={12}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorD}
  //       />
  //       <KeyboardButton
  //         name="F"
  //         key={13}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorF}
  //       />
  //       <KeyboardButton
  //         name="G"
  //         key={14}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorG}
  //       />
  //       <KeyboardButton
  //         name="H"
  //         key={15}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorH}
  //       />
  //       <KeyboardButton
  //         name="J"
  //         key={16}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorJ}
  //       />
  //       <KeyboardButton
  //         name="K"
  //         key={17}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorK}
  //       />
  //       <KeyboardButton
  //         name="L"
  //         key={18}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorL}
  //       />
  //     </HStack>

  //     {/* Last Row  */}
  //     <HStack>
  //       <KeyboardButton
  //         name="ENTER"
  //         key={19}
  //         clicking={props.manualClick}
  //         width="66px"
  //         fontSizing="16px"
  //         tone="#E5E5E5"
  //       />
  //       <KeyboardButton
  //         name="Z"
  //         key={20}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorZ}
  //       />
  //       <KeyboardButton
  //         name="X"
  //         key={21}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorX}
  //       />
  //       <KeyboardButton
  //         name="C"
  //         key={22}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorC}
  //       />
  //       <KeyboardButton
  //         name="V"
  //         key={23}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorV}
  //       />
  //       <KeyboardButton
  //         name="B"
  //         key={24}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorB}
  //       />
  //       <KeyboardButton
  //         name="N"
  //         key={25}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorN}
  //       />
  //       <KeyboardButton
  //         name="M"
  //         key={26}
  //         clicking={props.manualClick}
  //         width="43px"
  //         fontSizing="16px"
  //         tone={colorM}
  //       />
  //       <KeyboardButton
  //         name="⌫"
  //         key={27}
  //         clicking={props.manualClick}
  //         width="66px"
  //         fontSizing="24px"
  //         tone="#E5E5E5"
  //       />
  //     </HStack>
  //   </VStack>
  // );
}

export default KeyboardV3;