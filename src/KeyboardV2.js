// import {
//   Box,
//   HStack,
//   VStack,
//   Text,
// } from "@chakra-ui/react";

// function KeyBoardV2(props) {
//   const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
//   const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
//   const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"];

//   var buttonID = 0;

//   function KeyboardButton(args) {
    
//     return (
//       <Box
//         className={"Key" + args.name}
//         as="button"
//         height="58px"
//         lineHeight="1.2"
//         borderRadius="5px"
//         transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
//         border="3px"
//         width={args.width}
//         fontSize={args.fontSizing}
//         fontWeight="semibold"
//         bg="#E5E5E5"
//         borderColor="black"
//         color="#000000"
//         _hover={{ bg: "#B4B4B4" }}
//         _active={{
//           bg: "#dddfe2",
//           transform: "scale(0.98)",
//         }}
//         _focus={{
//           boxShadow:
//             "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
//         }}
//         onClick={args.clicking}
//       >
//         <Text> {args.name} </Text>
//       </Box>
//     );
//   }

//   function CreateButton(kButton) {
//     buttonID++;
//     return (
//       <KeyboardButton
//         name={kButton}
//         key={buttonID}
//         clicking={props.manualClick}
//         width="43px"
//         fontSizing="16px"
//       />
//     );
//   }
//   var firstRowArray = firstRow.map(CreateButton);
//   var secondRowArray = secondRow.map(CreateButton);
//   var thirdRowArray = thirdRow.map(CreateButton);

//   return (
//     <VStack>
//       <HStack>
//         {firstRowArray}
//       </HStack>

//       <HStack>
//         {secondRowArray}
//       </HStack>

//       <HStack>
//         <KeyboardButton
//           name="ENTER"
//           key={buttonID}
//           clicking={props.manualClick}
//           width="66px"
//           fontSizing="16px"
//           tone = "#E5E5E5"
//         />
//         {thirdRowArray}
//         <KeyboardButton
//           name="⌫"
//           key={buttonID + 1}
//           clicking={props.manualClick}
//           width="66px"
//           fontSizing="24px"
//           tone = "#E5E5E5"
//         />
//       </HStack>
//     </VStack>
//   );
// }

// export default KeyBoardV2;
