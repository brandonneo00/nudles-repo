import TopBarV2 from "./components/TopBarV2";
import AddImage from "./images/add.png";
import Bin from "./images/bin.png";

import {
  Text,
  Image,
  VStack,
  HStack,
  FormControl,
  Box,
  Input,
  Grid,
  GridItem,
  Container,
  Button,
  Spacer,
  Flex,
  IconButton,
  Tooltip,
  Select,
  Center,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  Spinner
} from "@chakra-ui/react";
import { Formik, Field } from "formik";

import { useState } from "react";
import {
  doc,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  setDoc,
} from "firebase/firestore";

import { db } from "./firebase/config";
import "./Search.css";
import { useAuthContext } from "./hooks/useAuthContext";
import _ from "lodash";

function Search() {
  //for specifying extra fields
  const [modulecode, setModuleCode] = useState("");
  const [academicyear, setAcademicYear] = useState("");
  const [term, setTerm] = useState("");
  const [error, setError] = useState(null);
  const [resArray, setResArray] = useState("");
  const [added, setAdded] = useState(false);
  const { user } = useAuthContext();
  const [deleted, setDeleted] = useState(false);
  const [stillsearching, setStillSearching] = useState("hidden");

  var helper = [];
  function checkSearchError(acadYear) {
    if (
      acadYear.includes("/") ||
      acadYear.includes(" ") ||
      !acadYear.includes("-") ||
      acadYear.length !== 5
    ) {
      throw Error(
        "Academic Year should be in the format 21-22 separated by a dash"
      );
    }
  }

  const handleDelete = async (
    moduleCode,
    academicYear,
    term,
    creatorUsername,
    creatorUID,
    modulename
  ) => {
    setDeleted(false);
    setAdded(false);
    const moduleObj = {
      modulecode: moduleCode,
      academicyear: academicYear,
      term: term,
      creatorusername: creatorUsername,
      creatoruid: creatorUID,
      modulename: modulename,
    };

    const docRef = doc(db, "likedmodules", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      var tempArray = docSnap.data().modarray;
      var newArray = [];

      for (let i = 0; i < tempArray.length; i++) {
        if (!_.isEqual(tempArray[i], moduleObj)) {
          newArray.push(tempArray[i]);
        }
      }
      await setDoc(docRef, { modarray: newArray });
    }
    setDeleted(true);
  };

  const handleAdd = async (
    moduleCode,
    academicYear,
    term,
    creatorUsername,
    creatorUID,
    modulename
  ) => {
    setAdded(false);
    setDeleted(false);
    const moduleObj = {
      modulecode: moduleCode,
      academicyear: academicYear,
      term: term,
      creatorusername: creatorUsername,
      creatoruid: creatorUID,
      modulename: modulename,
    };

    //Get modArray data from the likedmodules collection
    const docRef = doc(db, "likedmodules", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      var tempArray = docSnap.data().modarray;

      let allDifferent = true;
      // check if moduleObj exists in the modarray field
      for (let i = 0; i < tempArray.length; i++) {
        if (_.isEqual(tempArray[i], moduleObj)) {
          allDifferent = false;
          break;
        }
      }
      console.log("this is temp array " + tempArray);
      // push moduleObj into the temparray
      if (allDifferent) {
        tempArray.push(moduleObj);
      }
      // updating the modarray field of the doc
      await setDoc(docRef, { modarray: tempArray });
    } else {
      // doc.data() will be undefined in this case
      // set the modarray field if the field is empty
      await setDoc(docRef, { modarray: [moduleObj] });
    }
    //If empty/not inside then we add
    setAdded(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResArray("");
    setError("");
    setAdded(false);
    setDeleted(false);
    setStillSearching("visible");

    try {
      checkSearchError(academicyear);
      //creating reference to the questions collection in our firestore database
      const qnRef = collection(db, "questions");
      //creating query against the collection

      const _q = query(
        qnRef,
        where("module", "==", modulecode.toUpperCase()),
        where("academicyear", "==", academicyear),
        where("term", "==", term)
      );

      // executing the query
      const qn_querySnapshot = await getDocs(_q);

      var uniqueSet = new Set();
      var hasEntered = false;
      var arrayOfDocs = [];

      qn_querySnapshot.forEach((docs) => {
        hasEntered = true;
        if (!uniqueSet.has(docs.data().uid)) {
          uniqueSet.add(docs.data().uid);
          arrayOfDocs.push(docs.data());
        }
      });

      const userRef = collection(db, "userprofiles");

      for (let i = 0; i < arrayOfDocs.length; i++) {
        let nameHolder;
        let modulename;
        const queryUserRef = query(
          userRef,
          where("uid", "==", arrayOfDocs[i].uid)
        );
        const qUserRef = await getDocs(queryUserRef);
        qUserRef.forEach((file) => (nameHolder = file.data().username));

        const documentRef = doc(
          db,
          "modules",
          arrayOfDocs[i].module,
          arrayOfDocs[i].academicyear,
          arrayOfDocs[i].term
        );

        const documentSnap = await getDoc(documentRef);

        if (documentSnap.exists()) {
          console.log(
            documentSnap.data()[arrayOfDocs[i].uid] +
            " is the fieldname in getModuleName"
          );
          modulename = documentSnap.data()[arrayOfDocs[i].uid];
        }

        const obj = {
          modcode: arrayOfDocs[i].module,
          createdby: nameHolder,
          ay: arrayOfDocs[i].academicyear,
          term: arrayOfDocs[i].term,
          creatoruid: arrayOfDocs[i].uid,
          modulename: modulename,
        }

        helper.push(obj);
      }

      setResArray(helper);
      setStillSearching("hidden");

      if (!hasEntered) {
        throw Error("Sorry! No such module created yet!");
      }

      console.log("came here");

      setModuleCode("");
      setAcademicYear("");
      setTerm("");
      console.log("done resetting");
    } catch (e) {
      setError(e);
      console.error(e);
    }
  };

  return (
    <div className="searchdiv">
      <TopBarV2 />
      <Formik>
        <form onSubmit={handleSubmit}>
          <VStack spacing="0px" align="flex-start" margin="2% 2% 0%">
            <FormControl isRequired>
              <HStack spacing="1rem">
                <Box>
                  <Text
                    fontSize="1.5vw"
                    fontWeight="semibold"
                    color="#000000"
                    lineHeight="1.3"
                    align="left"
                  >
                    MODULE CODE
                  </Text>
                </Box>
                <Field
                  as={Input}
                  id="modulecode"
                  name="modulecode"
                  variant="filled"
                  width="10vw"
                  height="1.875vw"
                  placeholder="E.g. CS1101S"
                  onChange={(e) => setModuleCode(e.target.value)}
                  value={modulecode.toUpperCase()}
                  fontSize="1.2vw"
                />

                {/* new dropdown for the searches */}
                <Select
                  variant="filled"
                  placeholder="Academic Year"
                  width="12vw"
                  onChange={(e) => setAcademicYear(e.target.value)}
                  value={academicyear}
                  height="2vw"
                  fontSize="1.2vw"
                  iconSize="1vw"
                  isRequired
                >
                  <option>20-21</option>
                  <option>21-22</option>
                  <option>22-23</option>
                </Select>

                <Select
                  variant="filled"
                  placeholder="Term"
                  width="12vw"
                  onChange={(e) => setTerm(e.target.value)}
                  value={term}
                  height="2vw"
                  fontSize="1.2vw"
                  iconSize="1vw"
                >
                  <option>Semester 1</option>
                  <option>Semester 2</option>
                  <option>Special Term 1</option>
                  <option>Special Term 2</option>
                </Select>

                <Box
                  as="button"
                  height="2vw"
                  lineHeight="1.2"
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  border="0px"
                  width="7.813vw"
                  borderRadius="15px"
                  fontSize="1.2vw"
                  fontWeight="semibold"
                  bg="#83C5BE"
                  borderColor="#ccd0d5"
                  color="#000000"
                  _hover={{ bg: "#63B7AE" }}
                  _active={{
                    bg: "#dddfe2",
                    transform: "scale(0.98)",
                  }}
                  _focus={{
                    boxShadow:
                      "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                  }}
                >
                  Enter
                </Box>

                <Spinner color="#F7B556" visibility={stillsearching} thickness="4px"/>
              </HStack>
            </FormControl>
          </VStack>
        </form>
      </Formik>

      <Center marginTop="1rem">
        {error ? (
          <Alert
            status="error"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            fontSize="1vw"
            margin="0% 2%"
            height="3vw"
          >
            <AlertIcon boxSize="1vw" />
            <AlertTitle>Error: </AlertTitle>
            <AlertDescription>{error.message}</AlertDescription>
          </Alert>
        ) : deleted ? (
          <Alert
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            status="warning"
            fontSize="1vw"
            margin="0% 2%"
            height="3vw"
          >
            <AlertIcon boxSize="1vw" />
            <AlertTitle>Module Deleted! </AlertTitle>
            <AlertDescription>
              Deleted from your favourite list!
            </AlertDescription>
          </Alert>
        ) : added ? (
          <Alert
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            status="success"
            fontSize="1vw"
            margin="0% 2%"
            height="3vw"
          >
            <AlertIcon boxSize="1vw" />
            <AlertTitle>Module Added! </AlertTitle>
            <AlertDescription>
              Successfully added to your favourite list!
            </AlertDescription>
          </Alert>
        ) : null}
      </Center>

      <Grid minHeight="40vw">
        <GridItem
          bg="#E5E5E5"
          borderRadius="15px"
          margin="1% 2% 2%"
          padding="1.5%"
          opacity="0.9"
        >
          <Flex marginBottom="1vw" paddingRight="0.9rem">
            <Box width="12vw">
              <Text
                fontSize="1.5vw"
                fontWeight="semibold"
                color="#000000"
                lineHeight="1.3"
                align="center"
              >
                MODULE CODE
              </Text>
            </Box>
            <Spacer />
            <Box width="25vw">
              <Text
                fontSize="1.5vw"
                fontWeight="semibold"
                color="#000000"
                lineHeight="1.3"
                align="center"
              >
                MODULE NAME
              </Text>
            </Box>
            <Spacer />
            <Box width="20vw">
              <Text
                fontSize="1.5vw"
                fontWeight="semibold"
                color="#000000"
                lineHeight="1.3"
                align="center"
              >
                CREATED BY
              </Text>
            </Box>
            <Spacer />
            <Box width="7vw">
              <Text
                fontSize="1.5vw"
                fontWeight="semibold"
                color="#000000"
                lineHeight="1.3"
                align="center"
              >
                AY
              </Text>
            </Box>
            <Spacer />
            <Box width="15vw">
              <Text
                fontSize="1.5vw"
                fontWeight="semibold"
                color="#000000"
                lineHeight="1.3"
                align="center"
              >
                TERM
              </Text>
            </Box>
            <Spacer />
            <Box width="3.5vw">
              <Text
                fontSize="1.5vw"
                fontWeight="semibold"
                color="#000000"
                lineHeight="1.3"
                align="center"
              >
                ADD
              </Text>
            </Box>
            <Spacer />
            <Box width="6vw">
              <Text
                fontSize="1.5vw"
                fontWeight="semibold"
                color="#000000"
                lineHeight="1.3"
                align="center"
              >
                DELETE
              </Text>
            </Box>
          </Flex>

          <Box overflowY="scroll" maxHeight="30vw">
          {resArray &&
            resArray.map((element, index) => (
              <div key={index}>
                {console.log("current index is " + index)}
                {console.log(resArray.length + " length of array")}
                {console.log(resArray + " this is resarray in map")}
                <Flex marginBottom="1vw">
                  <Tooltip label={element.modcode}>
                    <Container
                      height="4vw"
                      width="12vw"
                      borderRadius="10px"
                      bg="#EDF6F9"
                      padding="0.9vw 0"
                    >
                      <Text
                        fontWeight="semibold"
                        textAlign="center"
                        fontSize="1.5vw"
                      >
                        {element.modcode}
                      </Text>
                    </Container>
                  </Tooltip>

                  <Spacer />

                  <Tooltip label={element.modulename}>
                    <Container
                      height="4vw"
                      width="25vw"
                      borderRadius="10px"
                      bg="#EDF6F9"
                      padding="0.9vw 0"
                    >
                      <Text
                        fontWeight="semibold"
                        textAlign="center"
                        fontSize="1.5vw"
                        noOfLines={1}
                      >
                        {element.modulename}
                      </Text>
                    </Container>
                  </Tooltip>

                  <Spacer />

                  <Tooltip label={element.createdby}>
                    <Container
                      height="4vw"
                      width="20vw"
                      borderRadius="10px"
                      bg="#EDF6F9"
                      padding="0.9vw 0"
                    >
                      <Text
                        fontWeight="semibold"
                        textAlign="center"
                        fontSize="1.5vw"
                        noOfLines={1}
                      >
                        {element.createdby}
                      </Text>
                    </Container>
                  </Tooltip>

                  <Spacer />

                  <Tooltip label={element.ay}>
                    <Container
                      height="4vw"
                      width="7vw"
                      borderRadius="10px"
                      bg="#EDF6F9"
                      padding="0.9vw 0"
                    >
                      <Text
                        fontWeight="semibold"
                        textAlign="center"
                        fontSize="1.5vw"
                      >
                        {element.ay}
                      </Text>
                    </Container>
                  </Tooltip>

                  <Spacer />

                  <Tooltip label={element.term}>
                    <Container
                      height="4vw"
                      width="15vw"
                      borderRadius="10px"
                      bg="#EDF6F9"
                      padding="0.9vw 0"
                    >
                      <Text
                        fontWeight="semibold"
                        textAlign="center"
                        fontSize="1.5vw"
                      >
                        {element.term}
                      </Text>
                    </Container>
                  </Tooltip>

                  <Spacer />
                  <Box width="3.5vw" textAlign="center" padding="0.9vw 0">
                    <Button
                      className="add-button"
                      onClick={() =>
                        handleAdd(
                          element.modcode,
                          element.ay,
                          element.term,
                          element.createdby,
                          element.creatoruid,
                          element.modulename
                        )
                      }
                      as={IconButton}
                      variant="ghost"
                      icon={
                        <Image src={AddImage} alt="add-logo" boxSize="2.5vw" />
                      }
                      boxSize="2.5vw"
                      borderWidth="0px"
                      bg="#ffffff00"
                      _hover={{ bg: "#ffffff00" }}
                      _active={{
                        bg: "#ffffff00",
                        transform: "scale(0.98)",
                      }}
                      padding="0px"
                    ></Button>
                  </Box>

                  <Spacer />
                  <Box width="6vw" textAlign="center" padding="0.8vw 0">
                    <Button
                      className="delete-button"
                      onClick={() =>
                        handleDelete(
                          element.modcode,
                          element.ay,
                          element.term,
                          element.createdby,
                          element.creatoruid,
                          element.modulename
                        )
                      }
                      as={IconButton}
                      variant="ghost"
                      icon={<Image src={Bin} alt="bin-logo" boxSize="2.5vw" />}
                      boxSize="2.5vw"
                      borderWidth="0px"
                      bg="#ffffff00"
                      _hover={{ bg: "#ffffff00" }}
                      _active={{
                        bg: "#ffffff00",
                        transform: "scale(0.98)",
                      }}
                      padding="0px"
                    ></Button>
                  </Box>
                </Flex>
              </div>
            ))}
            </Box>
        </GridItem>
      </Grid>
    </div>
  );
}
export default Search;
