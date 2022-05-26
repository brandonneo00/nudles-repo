import TopBar from "./components/TopBar";
import logo from "./images/nudles-logo.PNG";
import TopBarV2 from "./components/TopBarV2";
import bin from "./images/bin.png";
import {
  Box,
  HStack,
  VStack,
  Text,
  Center,
  WrapItem,
  Wrap,
  Container,
  Button,
  Image,
  IconButton
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Grid,
  GridItem,
  Textarea,
  Divider,
} from "@chakra-ui/react";
import "./InputQuestion.css";
import { Formik, Field } from "formik";
import {
  Input,
  FormControl,
  FormErrorMessage,
  Checkbox,
  FormLabel,
} from "@chakra-ui/react";
import InputForm from "./components/InputForm";
import TableV2 from "./TableV2";

function InputQuestion() {
  return (
    <div>
      <TopBarV2 />
      <Grid h="48.625rem">
        <GridItem bg="#E5E5E5" borderRadius="15px" margin="2%" padding="1.5%">
          <Formik
            initialValues={{
              modulecode: "",
              question: "",
              answer: "",
              explanation: "",
            }}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl isRequired>
                    <HStack>
                      <Text
                        fontSize="24px"
                        fontWeight="semibold"
                        color="#000000"
                        width="220px"
                        lineHeight="2"
                        align="center"
                      >
                        MODULE CODE
                      </Text>
                      <Field
                        as={Input}
                        id="modulecode"
                        name="modulecode"
                        variant="filled"
                        placeholder="Module Code"
                      />
                    </HStack>
                  </FormControl>

                  <FormControl isRequired>
                    <HStack>
                      <Text
                        fontSize="24px"
                        fontWeight="semibold"
                        color="#000000"
                        width="220px"
                        lineHeight="2"
                        align="center"
                      >
                        QUESTION
                      </Text>
                      <Field
                        as={Input}
                        id="question"
                        name="question"
                        placeholder="Question"
                        variant="filled"
                      />
                    </HStack>
                  </FormControl>

                  <FormControl isRequired>
                    <HStack>
                      <Text
                        fontSize="24px"
                        fontWeight="semibold"
                        color="#000000"
                        width="220px"
                        lineHeight="2"
                        align="center"
                      >
                        ANSWER
                      </Text>
                      <Field
                        as={Input}
                        id="answer"
                        name="answer"
                        placeholder="Answer"
                        variant="filled"
                      />
                    </HStack>
                  </FormControl>

                  <FormControl isRequired>
                    <HStack>
                      <Text
                        fontSize="24px"
                        fontWeight="semibold"
                        color="#000000"
                        width="220px"
                        lineHeight="2"
                        align="center"
                      >
                        EXPLANATION
                      </Text>
                      <Field
                        as={Textarea}
                        id="explanation"
                        name="explanation"
                        placeholder="Input explanation here"
                        variant="filled"
                      />
                    </HStack>
                  </FormControl>
                  <div className="add-box">
                    <Box
                      className="buttons"
                      as="button"
                      height="43px"
                      lineHeight="1.2"
                      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                      border="0px"
                      width="230px"
                      borderRadius="15px"
                      fontSize="20px"
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
                      Add
                    </Box>
                  </div>
                </VStack>
              </form>
            )}
          </Formik>

          {/*
          <div className="table-dimension">
            <TableContainer bg="#C4C4C4" className="table-box" borderRadius="15px" width="85.125rem" overflowX='hidden' overflowY='scroll' overflowWrap='normal'>
              <Table variant="simple" className="gap" size="md" textColor='#000000'>
                <TableCaption>Double Check before submitting!</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Module Code</Th>
                    <Th>Question</Th>
                    <Th>Answer</Th>
                    <Th>Explanation</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>AB1234</Td>
                    <Td>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Td>
                    <Td>
                    Lorem Ipsum
                    </Td>
                    <Td>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            </div>
            */}

          <div className="wrap-box">
            <Center>
              <Box as="table">
                <VStack border="1px" borderColor="#000000" spacing="0">
                  <HStack border="1px" borderColor="black">
                    <Container className="container" width="140px">
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
                      width="25rem"
                      centerContent
                    >
                      <Text
                        fontSize="20px"
                        fontWeight="semibold"
                        color="#000000"
                        lineHeight="1.3"
                        align="center"
                      >
                        QUESTION
                      </Text>
                    </Container>
                    <Container
                      className="container"
                      width="12.5rem"
                      centerContent
                    >
                      <Text
                        fontSize="20px"
                        fontWeight="semibold"
                        color="#000000"
                        lineHeight="1.3"
                        align="center"
                      >
                        ANSWER
                      </Text>
                    </Container>
                    <Container
                      className="container"
                      width="28.4375rem"
                      centerContent
                    >
                      <Text
                        fontSize="20px"
                        fontWeight="semibold"
                        color="#000000"
                        lineHeight="1.3"
                        align="center"
                      >
                        EXPLANATION
                      </Text>
                    </Container>
                    <Container
                      className="container"
                      width="5.9rem"
                      centerContent
                    >
                      <Text
                        fontSize="20px"
                        fontWeight="semibold"
                        color="#000000"
                        lineHeight="1.3"
                        align="center"
                      >
                        DELETE
                      </Text>
                    </Container>
                  </HStack>
                  <HStack border="1px" borderColor="black" marginTop="0px">
                    <Container
                      className="container"
                      width="140px"
                      centerContent
                    >
                      Lorem ipsum
                    </Container>
                    <Container
                      className="container"
                      width="400px"
                      centerContent
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod id metus quis vehicula. Nulla sit amet pretium sapien. 
                    </Container>
                    <Container
                      className="container"
                      width="200px"
                      centerContent
                    >
                      Lorem ipsum dolor sit
                    </Container>
                    <Container
                      className="container"
                      width="455px"
                      centerContent
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod id metus quis vehicula. Nulla sit amet pretium sapien. Morbi pellentesque lorem id augue viverra elementum. Nullam posuere dolor dolor, eu pretium quam cursus vel. Pellentesque lectus magna, pharetra a sapien a, posuere cursus tellus.
                    </Container>
                    <Button
                      className="delete-button"
                      onClick=''
                      as={IconButton}
                      variant="ghost"
                      icon={
                        <Box>
                          <Image src={bin} alt="menu-logo" boxSize="3em" />
                        </Box>
                      }
                      boxSize="5.9em"
                      borderWidth="0px"
                      bg="#ffffff00"
                      _hover={{ bg: "#ffffff00" }}
                      _active={{
                        bg: "#ffffff00",
                        transform: "scale(0.98)",
                      }}
                    ></Button>
                  </HStack>
                </VStack>
              </Box>
            </Center>
          </div>

          <div className="add-box">
            <Box
              className="submit-buttons"
              as="button"
              height="43px"
              lineHeight="1.2"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              border="0px"
              width="230px"
              borderRadius="15px"
              fontSize="20px"
              fontWeight="semibold"
              bg="#83C5BE"
              borderColor=""
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
              Submit
            </Box>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
}
export default InputQuestion;
