import TopBarV2 from "./components/TopBarV2";
import AddImage from "./images/add.png";
import Bin from "./images/bin.png";

import {
  Center,
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
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
// import work from "./images/work-in-progress.png";

import { useState, useEffect } from "react";
import { useCollection } from "./hooks/useCollection";
import {
  doc,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  getDoc,
  collectionGroup,
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
  const { user } = useAuthContext();

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
    creatorUID
  ) => {
    const moduleObj = {
      modulecode: moduleCode,
      academicyear: academicYear,
      term: term,
      creatorusername: creatorUsername,
      creatoruid: creatorUID,
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
  };

  const handleAdd = async (
    moduleCode,
    academicYear,
    term,
    creatorUsername,
    creatorUID
  ) => {
    const moduleObj = {
      modulecode: moduleCode,
      academicyear: academicYear,
      term: term,
      creatorusername: creatorUsername,
      creatoruid: creatorUID,
    };

    //Get modArray data from the likedmodules collection
    const docRef = doc(db, "likedmodules", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      var tempArray = docSnap.data().modarray;

      let allDifferent = true;
      // check if moduleObj exists in the modarray field
      for (let i = 0; i < tempArray.length; i++) {
        if (_.isEqual(tempArray[i], moduleObj)) {
          console.log("inside same");
          allDifferent = false;
          break;
        }
      }
      console.log("this is temp array " + tempArray);
      // push moduleObj into the temparray
      if (allDifferent) {
        tempArray.push(moduleObj);
        console.log("this is after pushing into temp array " + tempArray);
      }
      // updating the modarray field of the doc
      await setDoc(docRef, { modarray: tempArray });
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      // set the modarray field if the field is empty
      await setDoc(docRef, { modarray: [moduleObj] });
    }
    //If empty/not inside then we add
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResArray("");

    try {
      checkSearchError(academicyear);
      console.log("i am sleepy and i want a nap");
      //creating reference to the questions collection in our firestore database
      const qnRef = collection(db, "questions");
      console.log("3.05pm");
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

      console.log("been here before uuuuuu");

      qn_querySnapshot.forEach((docs) => {
        console.log("it is almost dinner time");
        console.log(docs.id, " => ", docs.data());
        console.log("time to go kith");

        if (!uniqueSet.has(docs.data().uid)) {
          uniqueSet.add(docs.data().uid);

          const userRef = collection(db, "userprofiles");

          const queryUserRef = query(
            userRef,
            where("uid", "==", docs.data().uid)
          );

          let nameHolder;
          const snapShot1 = async () => {
            const qUserRef = await getDocs(queryUserRef);
            qUserRef.forEach((file) => (nameHolder = file.data().username));
            console.log("this " + nameHolder);

            helper.push({
              modcode: docs.data().module,
              createdby: nameHolder,
              ay: docs.data().academicyear,
              term: docs.data().term,
              creatoruid: docs.data().uid,
            });

            setResArray(helper);
          };

          snapShot1();
        }
      });

      setModuleCode("");
      setAcademicYear("");
      setTerm("");
    } catch (e) {
      setError(e);
      console.error(e);
    }
  };

  function formatYear(acadyear) {
    return "20" + acadyear.substring(0, 3) + "20" + acadyear.substring(3);
  }

  function ModuleNameAPI(props) {
    const nusmodsAPI =
      "https://api.nusmods.com/v2/" +
      formatYear(props.ay) +
      "/modules/" +
      props.mc +
      ".json";
    const [moduleName, setModuleName] = useState("");
    useEffect(() => {
      fetch(nusmodsAPI)
        .then((response) => response.json())
        .then((data) => setModuleName(data.title))
        .catch((error) =>
          setModuleName(`Unable to retrieve Module Name: ${error}`)
        );
    }, []);

    return moduleName;
  }

  return (
    <div>
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
                  // width="8.5rem"
                  width="9vw"
                  height="1.875vw"
                  placeholder="E.g. CS1101S"
                  onChange={(e) => setModuleCode(e.target.value)}
                  value={modulecode.toUpperCase()}
                />

                <Box>
                  <Text
                    fontSize="1.5vw"
                    fontWeight="semibold"
                    color="#000000"
                    lineHeight="1.3"
                    align="left"
                  >
                    Academic Year
                  </Text>
                </Box>
                <Field
                  as={Input}
                  id="modulecode"
                  name="academic year"
                  variant="filled"
                  // width="8.5rem"
                  width="9vw"
                  height="1.875vw"
                  placeholder="Academic Year"
                  onChange={(e) => setAcademicYear(e.target.value)}
                  value={academicyear}
                />

                <Select
                  variant="filled"
                  placeholder="Term"
                  width="8.333vw"
                  onChange={(e) => setTerm(e.target.value)}
                  value={term}
                  height="2vw"
                  fontSize="1.2vw"
                  iconSize="1vw"
                  // textColor="#8891A4"
                >
                  <option>Semester 1</option>
                  <option>Semester 2</option>
                  <option>Special Term 1</option>
                  <option>Special Term 2</option>
                </Select>

                <Box
                  // className="buttons"
                  as="button"
                  // height="43px"
                  height="2vw"
                  lineHeight="1.2"
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  border="0px"
                  // width="150px"
                  width="7.813vw"
                  borderRadius="15px"
                  fontSize="1.2vw"
                  // fontSize="20px"
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
              </HStack>
            </FormControl>
          </VStack>
        </form>
      </Formik>

      <Grid minHeight="40vw">
        <GridItem bg="#E5E5E5" borderRadius="15px" margin="2%" padding="1.5%">
          <Flex marginBottom="1vw">
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

          {resArray &&
            resArray.map((element, index) => (
              <Flex key={index} marginBottom="1vw">
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

                <Tooltip
                  label={
                    <ModuleNameAPI ay={element.ay} mc={element.modcode}>
                      {" "}
                    </ModuleNameAPI>
                  }
                >
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
                      {/* {element.modname} */}
                      <ModuleNameAPI ay={element.ay} mc={element.modcode}>
                        {" "}
                      </ModuleNameAPI>
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
                        element.creatoruid
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
                        element.creatoruid
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
            ))}
        </GridItem>
      </Grid>
    </div>
  );
}
export default Search;
