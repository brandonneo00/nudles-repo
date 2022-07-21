// import TopBarV2 from "./components/TopBarV2";
// import { Text, Center, Box, Grid, VStack, HStack } from "@chakra-ui/react";
// import { useAuthContext } from "./hooks/useAuthContext";
// import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
// import { db } from "./firebase/config";
// import { useState } from "react";
// import { Formik, Field } from "formik";
 

// function Profile() {
//     const { user } = useAuthContext();
//     const [buttonclick, setButtonClick] = useState(false);
//     const [userdata, setUserData] = useState("");
//     var res = "";

//     const handleClick = async () => {
//         setButtonClick(!buttonclick);
//         setUserData("");
        
//         //creating reference to the userprofiles collection 
//         const ref = collection(db, "userprofiles");
//         //creating query 
//         const q = query(
//             ref,
//             where("uid", "==", user.uid)
//         );
//         //executing query
//         const userSnapshot = await getDocs(q);
//         userSnapshot.forEach((ele) => {
//             res = ele.data();
//             // ele is from firestore and has the following fields:
//             // admin, nusnet, uid, username
//             })
//         setUserData(res);
//     }
    
//     return (
//         <>
        
//             <TopBarV2 />
//             {(buttonclick) ? (
//             <Center marginTop="10vw">
//                 <Grid bg="#E5E5E5" borderRadius="10px">
//                     <VStack align="flex" spacing="1vw" margin="3vw 3vw 5vw 3vw">
//                         <VStack spacing={0} align="left">
//                             <Text
//                                 fontSize="1vw"
//                                 fontWeight="bold"
//                                 color="#000000"
//                                 lineHeight="2"
//                                 align="left"
//                             >

//                                 Username
//                             </Text>
//                             <Box bg="#FFFFFF" borderRadius="15px" width="20vw">
//                                 <Text
//                                     fontSize="1.5vw"
//                                     fontWeight="regular"
//                                     color="#000000"
//                                     lineHeight="2"
//                                     marginLeft="1vw"
//                                     height="3vw"
//                                 >
//                                     {userdata.username}
//                                 </Text>
//                             </Box>
//                         </VStack>

//                         <VStack spacing={0} align="left">
//                             <Text
//                                 fontSize="1vw"
//                                 fontWeight="bold"
//                                 color="#000000"
//                                 lineHeight="2"
//                                 align="left"
//                             >
//                                 NUSNET ID
//                             </Text>
//                             <Box bg="#FFFFFF" borderRadius="15px" width="20vw">
//                                 <Text
//                                     fontSize="1.5vw"
//                                     fontWeight="regular"
//                                     color="#000000"
//                                     lineHeight="2"
//                                     marginLeft="1vw"
//                                     height="3vw"
//                                 >
//                                     {userdata.nusnet}
//                                 </Text>
//                             </Box>
//                         </VStack>
//                     </VStack>
//                     <Center>
//                         <Box
//                             as="button"
//                             height="3vw"
//                             lineHeight="1.2"
//                             transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
//                             border="0px"
//                             width="10vw"
//                             borderRadius="15px"
//                             fontSize="20px"
//                             fontWeight="semibold"
//                             bg="#F7B556"
//                             borderColor=""
//                             color="#000000"
//                             margin="1.5% 0%"
//                             _hover={{ bg: "#DBA14D" }}
//                             _active={{
//                                 bg: "#F7B556",
//                                 transform: "scale(0.98)",
//                                 borderColor: "",
//                             }}
//                             _focus={{
//                                 boxShadow:
//                                     "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
//                             }}
//                             marginBottom="2vw"
//                         >
//                             <Text
//                                 fontSize="1vw"
//                                 fontWeight="bold"
//                                 lineHeight="2"
//                                 color="#FEFAE0"
//                             >
//                                 {' '}
//                                 Update Profile{' '}
//                             </Text>
//                         </Box>
//                     </Center>
//                 </Grid>
//             </Center>
//             )
//             :
//             (
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
//             onClick={handleClick}
//           >
//             Show Profile
//           </Box>
//         </Center>

//             )}
//         </>

//     );
// }

// export default Profile;