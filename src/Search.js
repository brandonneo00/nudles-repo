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
  Tooltip
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
// import work from "./images/work-in-progress.png";

import { useState } from "react";

import { collection, addDoc } from "firebase/firestore";
import "./Search.css";

function Search() {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("hello");
  };
  const searchResult = {
    moduleCode: "MA2001",
    moduleName:"Fundamentals of Econometrics",
    createdBy:"Dr Nudles Admin",
    ay: "21/22",
    term:"Special Term 1"
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
                  // width="8.5rem"
                  width="9vw"
                  height="1.875vw"
                  placeholder="E.g. CS1101S"
                  onChange={(e) => setSearchInput(e.target.value)}
                  value={searchInput}
                />

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
          
          <Flex>
            <VStack>
              <Text
                fontSize="1.5vw"
                fontWeight="semibold"
                color="#000000"
                lineHeight="1.3"
                align="center"
              >
                MODULE CODE
              </Text>
              <Tooltip label={searchResult.moduleCode}>
              <Container
                // height="2.500vw"
                width="12vw"
                borderRadius="10px"
                bg="#EDF6F9"
                padding="0"
              
              >
              
                <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw"> {searchResult.moduleCode}</Text>
              </Container>
              </Tooltip>
            </VStack>

            <Spacer />

            <VStack>
              <Text
                fontSize="1.5vw"
                fontWeight="semibold"
                color="#000000"
                lineHeight="1.3"
                align="center"
              >
                MODULE NAME
              </Text>
              <Tooltip label={searchResult.moduleName}>
              <Container
                // height="2.500vw"
                width="25vw"
                borderRadius="10px"
                bg="#EDF6F9"
                padding="0"
              >
                <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw" noOfLines={1}>{searchResult.moduleName}</Text>
                
              </Container>
              </Tooltip>
             
            </VStack>

            <Spacer />

            <VStack>
              <Text
                fontSize="1.5vw"
                fontWeight="semibold"
                color="#000000"
                lineHeight="1.3"
                align="center"
              >
                CREATED BY
              </Text>
              <Tooltip label={searchResult.createdBy}>
              <Container
                // height="2.500vw"
                width="20vw"
                borderRadius="10px"
                bg="#EDF6F9"
                padding="0"
              >
                <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw" noOfLines={1}>{searchResult.createdBy}</Text>
              </Container>
              </Tooltip>
            </VStack>

            <Spacer />

            <VStack>
              <Text
                fontSize="1.5vw"
                fontWeight="semibold"
                color="#000000"
                lineHeight="1.3"
                align="center"
              >
                AY
              </Text>
              <Tooltip label={searchResult.ay}>
              <Container
                // height="2.500vw"
                width="7vw"
                borderRadius="10px"
                bg="#EDF6F9"
                padding="0"
              >
                <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">{searchResult.ay}</Text>
              </Container>
              </Tooltip>
            </VStack>

            <Spacer />

            <VStack>
              <Text
                fontSize="1.5vw"
                fontWeight="semibold"
                color="#000000"
                lineHeight="1.3"
                align="center"
              >
                TERM
              </Text>
              <Tooltip label={searchResult.term}>
              <Container
                // height="2.500vw"
                width="15vw"
                borderRadius="10px"
                bg="#EDF6F9"
                padding="0"
              >
                <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw"> {searchResult.term}</Text>
              </Container>
              </Tooltip>
            </VStack>

            <Spacer />

            <VStack>
              <Text
                fontSize="1.5vw"
                fontWeight="semibold"
                color="#000000"
                lineHeight="1.3"
                align="center"
              >
                ADD
              </Text>
              
              <Button
                className="add-button"
                // onClick={() => handleAdd(question.id)}
                as={IconButton}
                variant="ghost"
                icon={<Image src={AddImage} alt="add-logo" boxSize="2.5vw" />}
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
            </VStack>

            <Spacer />

            <VStack>
              <Text
                fontSize="1.5vw"
                fontWeight="semibold"
                color="#000000"
                lineHeight="1.3"
                align="center"
              >
                DELETE
              </Text>
              {/* <Container
                height="2.500vw"
                width="2.708vw"
                borderRadius="15px"
              ></Container> */}
              <Button
                className="delete-button"
                // onClick={() => handleAdd(question.id)}
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
            </VStack>
          </Flex>

          {/* <Center>
            <Box as="table">
              <VStack spacing="0">
                <HStack spacing="1rem">
                  <Container
                    className="container"
                    width="11.625rem"
                    marginLeft="0px"
                  >
                    <Text
                      fontSize="20px"
                      fontWeight="semibold"
                      color="#000000"
                      lineHeight="1.3"
                      align="center"
                    >
                      MODULE CODE
                    </Text>
                  </Container>

                  <Container
                    className="container"
                    width="23.75rem"
                    centerContent
                    marginLeft="0px"
                  >
                    <Text
                      fontSize="20px"
                      fontWeight="semibold"
                      color="#000000"
                      lineHeight="1.3"
                      align="center"
                    >
                      MODULE NAME
                    </Text>
                  </Container>

                  <Container
                    className="container"
                    width="15.25rem"
                    centerContent
                  >
                    <Text
                      fontSize="20px"
                      fontWeight="semibold"
                      color="#000000"
                      lineHeight="1.3"
                      align="center"
                    >
                      CREATED BY
                    </Text>
                  </Container>

                  <Container
                    className="container"
                    width="7.625rem"
                    centerContent
                  >
                    <Text
                      fontSize="20px"
                      fontWeight="semibold"
                      color="#000000"
                      lineHeight="1.3"
                      align="center"
                    >
                      AY
                    </Text>
                  </Container>

                  <Container
                    className="container"
                    width="12.313rem"
                    centerContent
                  >
                    <Text
                      fontSize="20px"
                      fontWeight="semibold"
                      color="#000000"
                      lineHeight="1.3"
                      align="center"
                    >
                      TERM
                    </Text>
                  </Container>

                  <Container
                    className="container"
                    width="3.25rem"
                    centerContent
                  />

                  <Container
                    className="container"
                    width="3.25rem"
                    centerContent
                  />

                </HStack>

                <Center>{}</Center>
              </VStack>
            </Box>
          </Center> */}
        </GridItem>
      </Grid>

      {/* <Center bg="#FFFFFF00" height="40rem">
        <Image boxSize="30rem" src={work} alt="Work-in-progress" />
      </Center>
      <Center bg="#FFFFFF00" color="black">
        <Text fontSize="60px" fontWeight="bold" color="#000000" align="center">
          (MODULE SEARCH)
        </Text>
      </Center> */}
    </div>
  );
}
export default Search;
