// import { jsPDF } from "jspdf";
// import { HStack, VStack, Text, Box, Center } from "@chakra-ui/react";
// import { useLocation } from "react-router-dom";
// import { db } from "./firebase/config";
// import {
//   collection,
//   getDocs,
// } from "firebase/firestore";
// import { useState, useRef } from "react";

// function CompiledQuestions() {
//   const [resultArray, setResultArray] = useState("");
//   const [clicked, setClicked] = useState(false);
//   var placeholder = [];
//   const location = useLocation();
//   const { obj } = location.state;
//   console.log(obj + "this is obj");
//   // handleShow helps to fetch the data and display onto the CompiledQuestion page
//   const handleShow = async () => {
//     setResultArray("");
//     setClicked(false);
//     const querySnapshot = await getDocs(
//       collection(
//         db,
//         "modules",
//         obj.modcode,
//         obj.ay,
//         obj.term,
//         obj.creatoruid
//       ))
//     querySnapshot.forEach((doc) => {
//       placeholder.push({
//         question: doc.data().question,
//         hint: doc.data().hint,
//         answer: doc.data().answer,
//         explanation: doc.data().explanation
//       })
//     })
//     setResultArray(placeholder);
//     setClicked(true);
//   }
//   const handleDownload = async () => {
//     const pdf = new jsPDF("portrait", "pt", "a4");
//     const data = await document.querySelector("#pdf");
//     pdf.html(data).then(() => {
//       pdf.save(
//         obj.modcode +
//         "_" +
//         obj.ay +
//         "_" +
//         obj.term +
//         "_" +
//         obj.createdby +
//         ".pdf"
//       );
//     });
//   }

//   const elementRef = useRef(null);

//   return (
//     <div id="pdf">
//       {clicked ?
//         (<Box padding="10px 16px" width="595px" height="842px">
//           <Text align="left"
//             fontSize="18px"
//             fontWeight="bold"
//           >Compiled Questions for {obj.modcode}</Text>
//           <Text align="left"
//             fontSize="16px"
//             fontWeight="bold"
//             textColor="#686B6F"
//           >AY{obj.ay} {obj.term}</Text>
//           <Text align="left"
//             fontSize="10px"
//             fontWeight="bold"
//             textColor="#686B6F"
//             marginBottom="8px"
//           >Created By {obj.createdby}</Text>

//           {resultArray && resultArray.map((element, index) => (
//             <Box key={index} borderColor="#000000" marginBottom="10px" ref={elementRef}>
//               <VStack spacing={0} align="left">
//                 <Text
//                   fontSize="11px"
//                   fontWeight="bold">{(index + 1) + ") " + element.question}</Text>
//                 <HStack spacing="5px">
//                 <Text fontSize="10px" fontWeight="bold">Hint: </Text>
//                 <Text fontSize="10px">{element.hint}</Text>
//                 </HStack>
//                 <HStack spacing="5px">
//                 <Text fontSize="10px" fontWeight="bold">Answer: </Text>
//                 <Text fontSize="10px">{element.answer}</Text>
//                 </HStack>
//                 <HStack spacing="5px">
//                 <Text fontSize="10px" fontWeight="bold">Explanation: </Text>
//                 <Text fontSize="10px">{element.explanation}</Text>
//                 </HStack>
//               </VStack>
//             </Box>
//             ))
//           }

//           <Box
//             as="button"
//             height="30px"
//             lineHeight="1.2"
//             transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
//             border="0px"
//             width="120px"
//             borderRadius="10px"
//             fontSize="14px"
//             fontWeight="semibold"
//             bg="#F7B556"
//             borderColor=""
//             color="#000000"
//             _hover={{ bg: "#DBA14D" }}
//             _active={{
//               bg: "#F7B556",
//               transform: "scale(0.98)",
//               borderColor: "",
//             }}
//             _focus={{
//               boxShadow:
//                 "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
//             }}
//             onClick={handleDownload}
//             marginTop="16px"
//             textAlign="middle"
//           >
//             Download
//           </Box>
//         </Box>)
//         :
//         <Center textAlign="center" minHeight="100vh">
//           <Box
//             as="button"
//             height="6vw"
//             lineHeight="1.2"
//             transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
//             border="0px"
//             width="20vw"
//             borderRadius="15px"
//             fontSize="2vw"
//             fontWeight="semibold"
//             bg="#F7B556"
//             borderColor=""
//             color="#000000"
//             _hover={{ bg: "#DBA14D" }}
//             _active={{
//               bg: "#F7B556",
//               transform: "scale(0.98)",
//               borderColor: "",
//             }}
//             _focus={{
//               boxShadow:
//                 "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
//             }}
//             onClick={handleShow}
//           >
//             Show Document
//           </Box>
//         </Center>
//       }</div>
//   );
// };

// export default CompiledQuestions;