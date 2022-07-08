import TopBarV2 from "./components/TopBarV2";
import Preview from "./images/preview.png";

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
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

// importing our firestore database object
import { db } from "./firebase/config";
import "./Search.css";

function ResourceLibrary() {
  const [modulecode, setModuleCode] = useState("");
  const [academicyear, setAcademicYear] = useState("");
  const [term, setTerm] = useState("");
  const [error, setError] = useState(null);
  const [resultArr, setResultArr] = useState("");

  function ModuleNameAPI(props) {
    const nusmodsAPI =
      "https://api.nusmods.com/v2/" +
      formatYear(props.ay) +
      "/modules/" +
      props.mc +
      ".json";
    const [moduleName, setModuleName] = useState("Loading.....");
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

  function formatYear(acadyear) {
    return "20" + acadyear.substring(0, 3) + "20" + acadyear.substring(3);
  }

  function checkSearchInput(acadYear) {
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

  var helperArr = [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResultArr("");
    setError("");

    try {
      checkSearchInput(academicyear);
      //creating reference to the questions collection in our firestore database
      const questionsRef = collection(db, "questions");
      //creating query against the questions collection
      const qnCollectionQuery = query(
        questionsRef,
        where("academicyear", "==", academicyear),
        where("module", "==", modulecode.toUpperCase()),
        where("term", "==", term)
      );
      // creating a Js Set to store unique unique academicyear, modulecode, term
      var setUnique = new Set();
      var hasEntered = false;

      //executing the query
      const qnCollectionQuerySnapshot = await getDocs(qnCollectionQuery);
      qnCollectionQuerySnapshot.forEach((doc) => {
        hasEntered = true;
        if (!setUnique.has(doc.data().uid)) {
          setUnique.add(doc.data().uid);

          //creating secondary reference to another collection in firestore --> userprofiles
          const userprofilesRef = collection(db, "userprofiles");
          //creating secondary Query to userprofiles collection
          const userprofilesQuery = query(
            userprofilesRef,
            where("uid", "==", doc.data().uid)
          );

          let usernamePlaceholder;
          const hello = async () => {
            //executing the secondary query
            const ref = await getDocs(userprofilesQuery);
            ref.forEach((file) => (usernamePlaceholder = file.data().username));

            helperArr.push({
              modcode: doc.data().module,
              createdby: usernamePlaceholder,
              ay: doc.data().academicyear,
              term: doc.data().term,
              creatoruid: doc.data().uid
            });

            setResultArr(helperArr);
          };
          hello();
        }
      });
      if (!hasEntered) {
        throw Error("Sorry! No such module created yet");
      }
      setModuleCode("");
      setAcademicYear("");
      setTerm("");
    } catch (e) {
      setError(e);
      console.error(e);
    }
  };

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
                    ACADEMIC YEAR
                  </Text>
                </Box>
                <Field
                  as={Input}
                  id="modulecode"
                  name="academic year"
                  variant="filled"
                  width="9vw"
                  height="1.875vw"
                  placeholder="E.g. 21-22"
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
              </HStack>
            </FormControl>
          </VStack>
        </form>
      </Formik>

      <Center marginTop="1rem">
        {error && (
          <Alert
            status="error"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            fontSize="md"
            margin="0% 2%"
          >
            <AlertIcon />
            <AlertTitle>Error: </AlertTitle>
            <AlertDescription>{error.message}</AlertDescription>
          </Alert>
        )}
      </Center>


      <Grid minHeight="40vw">
        <GridItem bg="#E5E5E5" borderRadius="15px" margin="1% 2% 2%" padding="1.5%">
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
            <Box width="10vw">
              <Text
                fontSize="1.5vw"
                fontWeight="semibold"
                color="#000000"
                lineHeight="1.3"
                align="center"
              >
                PREVIEW
              </Text>
            </Box>
          </Flex>

          {resultArr &&
            resultArr.map((element, index) => (
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
                <Link to={{
                  pathname: "/CompiledQuestions",
                  state: { obj: element }
                }}>
                  <Box width="10vw" textAlign="center" padding="0.9vw 0">
                    <Button
                      className="download-button"
                      as={IconButton}
                      variant="ghost"
                      icon={
                        <Image
                          src={Preview}
                          alt="preview-logo"
                          boxSize="2.5vw"
                        />
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
                </Link>
              </Flex>
            ))}
        </GridItem>
      </Grid>
    </div>
  );
}

export default ResourceLibrary;
