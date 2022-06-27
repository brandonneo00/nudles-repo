import bin from "./images/bin.png";
import add from "./images/add.png";
import { Button, Image, Box, IconButton } from "@chakra-ui/react";

import { db } from "./firebase/config";
import { doc, deleteDoc } from "firebase/firestore"; // for deleting or updating documemts
import { collection, addDoc } from "firebase/firestore";

import { useAuthContext } from "./hooks/useAuthContext";


function SearchList(){

    return(<div>

    </div>);
}

// function SearchList() {
//   const { user } = useAuthContext();

//   const handleDelete = async (id) => {
//     //console.log(id)

//     // first argument is the database that we want to connect to
//     // second argument is the specific collection
//     // third arugment is the id of the document we want to reference to
//     const docRef = doc(db, "userprofiles", id);
//     await deleteDoc(docRef);
//   };

//   const handleAdd = async (e) => {
//     e.preventDefault();
//     const ref = collection(db, "userprofiles");
//     // first argument is the ref that we want to add the object to
//     // second argument is the actual object that we want to input into the ref

//     await addDoc(ref, {
//     //   module: modulecode.toUpperCase(),
//     //   question: question.toUpperCase(),
//     //   answer: answer.toUpperCase(),
//     //   hint: hint.toUpperCase(),
//     //   explanation: explanation.toUpperCase(),
//     //   academicyear: academicyear,
//     //   term: term,
//       uid: user.uid,
//       moduleList: modulecode
//     });
//   };

//   {/*
// two different collections are at play here: modules and userprofiles
// i) what is displayed is tall the modules in the modules collection for the user to see
// there needs to be a link between modules collection and userprofiles collection
// ii) by clicking on the add button, it will add the modulecode of the particular module in the modules collection into the moduleList field of the userprofile --> LINK TO USER'S UID AND FIND WHICH PROFILE--> making use of addDoc and db import from firebase and firestore
// iii) by clicking on the delete button, it will remove the module code of the particular module from the moduleList field of the userprofile --> making use of db, deleteDoc import from firebase and firestore
// == upon clicking, an alert prommpt will pop up to the user --> settled using the handleAdd and handleDelete handler  


// modules collection fields: moduleCode, moduleName, createdBy, academicYear, term, uid of the person that created the module
// userprofiles collection fields: username, nusnetid, admin, uid, moduleList 
// --> moduleList = ["MA2001", "MA2002", "MA1521"]

// mind flow
// input question (linked to qn database) --> 
// modulelist => modules that user liked?
// modules collection -> ben add ma2001 -> uid + ma2001

// input qn -> qn db add all the qns w diff modules 

// */}


//   return (
//     <div>

    
//       <Button
//         className="add-button"
//         onClick={() => handleAdd(question.id)}
//         as={IconButton}
//         variant="ghost"
//         icon={
//           <Box>
//             <Image src={add} alt="add-logo" boxSize="3em" />
//           </Box>
//         }
//         boxSize="6.313rem"
//         borderWidth="0px"
//         bg="#ffffff00"
//         _hover={{ bg: "#ffffff00" }}
//         _active={{
//           bg: "#ffffff00",
//           transform: "scale(0.98)",
//         }}
//       ></Button>

//       <Button
//         className="delete-button"
//         onClick={() => handleDelete(question.id)}
//         as={IconButton}
//         variant="ghost"
//         icon={
//           <Box>
//             <Image src={bin} alt="delete-logo" boxSize="3em" />
//           </Box>
//         }
//         boxSize="6.313rem"
//         borderWidth="0px"
//         bg="#ffffff00"
//         _hover={{ bg: "#ffffff00" }}
//         _active={{
//           bg: "#ffffff00",
//           transform: "scale(0.98)",
//         }}
//       ></Button>
//     </div>
//   );
// }

export default SearchList;
