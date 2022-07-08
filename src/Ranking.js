import {
  HStack,
  VStack,
  Text,
  Box,
  Center,
  Grid,
  GridItem,
  Flex,
  Container,
  Spacer,
  Image
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { db } from "./firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { useState, useRef } from "react";
import TopBarV2 from "./components/TopBarV2";
import Correct from "./images/checked.png";
import Wrong from "./images/cancel.png";
import Null from "./images/null.png";
import NotApplicable from "./images/not-applicable.png";
import Dash from "./images/dash.png";

function Ranking() {
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
  //   var currentHeight = 60;

  return (
    <div>
      <TopBarV2 />
      <Grid minHeight="40vw">
        <GridItem bg="#E5E5E5" borderRadius="15px" margin="2%" padding="2% 3%">
          <Box>
            <Text
              fontSize="2vw"
              fontWeight="semibold"
              color="#000000"
              lineHeight="1.3"
              align="left"
            >
              MA2001 AY 21-22 By Professor ABC
            </Text>
          </Box>

          <Flex marginTop="1rem" paddingRight="0.9rem">
            <Box width="5vw">
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                Rank
              </Text>
            </Box>
            <Spacer />
            <Box width="30vw">
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                Username
              </Text>
            </Box>

            <Spacer />

            <Box width="4vw">
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                1
              </Text>
            </Box>
            <Spacer />
            <Box width="4vw">
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                2
              </Text>
            </Box>
            <Spacer />
            <Box width="4vw">
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                3
              </Text>
            </Box>
            <Spacer />
            <Box width="4vw">
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                4
              </Text>
            </Box>
            <Spacer />
            <Box width="4vw">
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                5
              </Text>
            </Box>
            <Spacer />
            <Box width="4vw">
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                6
              </Text>
            </Box>
            <Spacer />
            <Box width="14vw">
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                Time Completed
              </Text>
            </Box>
          </Flex>

          <Box
            height="1vw"
            border="2px"
            borderColor="#E5E5E5"
            borderBottomColor="#B5B5B5"
            marginBottom="1rem"
          />


{/* ---------------------------- Start of Middle Ranking is here ---------------------------- */}


          <Box overflowY="scroll" height="24vw" maxHeight="24vw">

          <Flex>
            <Box
              height="4vw"
              width="5vw"
              borderRadius="10px"
              bg="#EDF6F9"
              padding="0.9vw 0"
            >
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                No.
              </Text>
            </Box>
            
            <Spacer />
            
            <Box
              height="4vw"
              width="30vw"
              borderRadius="10px"
              bg="#EDF6F9"
              padding="0.9vw 0"
            >
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                Username
              </Text>
            </Box>
            
            <Spacer />
            
            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Wrong}></Image>
            </Box>
            
            <Spacer />

            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Wrong}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Wrong}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Wrong}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Correct}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="4vw"
              padding="0.5vw"
            >
            <Image width="3vw" height="3vw" src={Dash}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="14vw"
              borderRadius="10px"
              bg="#EDF6F9"
              padding="0.9vw 0"
            >
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                00:00:01:59
              </Text>
            </Box>

          </Flex>
          <Flex marginTop="1rem">
            <Box
              height="4vw"
              width="5vw"
              borderRadius="10px"
              bg="#EDF6F9"
              padding="0.9vw 0"
            >
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                No.
              </Text>
            </Box>
            
            <Spacer />
            
            <Box
              height="4vw"
              width="30vw"
              borderRadius="10px"
              bg="#EDF6F9"
              padding="0.9vw 0"
            >
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                Username
              </Text>
            </Box>
            
            <Spacer />
            
            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Wrong}></Image>
            </Box>
            
            <Spacer />

            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Wrong}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Wrong}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Wrong}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Correct}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="4vw"
              padding="0.5vw"
            >
            <Image width="3vw" height="3vw" src={Dash}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="14vw"
              borderRadius="10px"
              bg="#EDF6F9"
              padding="0.9vw 0"
            >
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                00:00:01:59
              </Text>
            </Box>

          </Flex>
          <Flex marginTop="1rem">
            <Box
              height="4vw"
              width="5vw"
              borderRadius="10px"
              bg="#EDF6F9"
              padding="0.9vw 0"
            >
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                No.
              </Text>
            </Box>
            
            <Spacer />
            
            <Box
              height="4vw"
              width="30vw"
              borderRadius="10px"
              bg="#EDF6F9"
              padding="0.9vw 0"
            >
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                Username
              </Text>
            </Box>
            
            <Spacer />
            
            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Wrong}></Image>
            </Box>
            
            <Spacer />

            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Wrong}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Wrong}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Wrong}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Correct}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="4vw"
              padding="0.5vw"
            >
            <Image width="3vw" height="3vw" src={Dash}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="14vw"
              borderRadius="10px"
              bg="#EDF6F9"
              padding="0.9vw 0"
            >
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                00:00:01:59
              </Text>
            </Box>

          </Flex>
          <Flex marginTop="1rem">
            <Box
              height="4vw"
              width="5vw"
              borderRadius="10px"
              bg="#EDF6F9"
              padding="0.9vw 0"
            >
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                No.
              </Text>
            </Box>
            
            <Spacer />
            
            <Box
              height="4vw"
              width="30vw"
              borderRadius="10px"
              bg="#EDF6F9"
              padding="0.9vw 0"
            >
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                Username
              </Text>
            </Box>
            
            <Spacer />
            
            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Wrong}></Image>
            </Box>
            
            <Spacer />

            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Wrong}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Wrong}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Wrong}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Correct}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="4vw"
              padding="0.5vw"
            >
            <Image width="3vw" height="3vw" src={Dash}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="14vw"
              borderRadius="10px"
              bg="#EDF6F9"
              padding="0.9vw 0"
            >
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                00:00:01:59
              </Text>
            </Box>

          </Flex>
          <Flex marginTop="1rem">
            <Box
              height="4vw"
              width="5vw"
              borderRadius="10px"
              bg="#EDF6F9"
              padding="0.9vw 0"
            >
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                No.
              </Text>
            </Box>
            
            <Spacer />
            
            <Box
              height="4vw"
              width="30vw"
              borderRadius="10px"
              bg="#EDF6F9"
              padding="0.9vw 0"
            >
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                Username
              </Text>
            </Box>
            
            <Spacer />
            
            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Wrong}></Image>
            </Box>
            
            <Spacer />

            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Wrong}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Wrong}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Wrong}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Correct}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="4vw"
              padding="0.5vw"
            >
            <Image width="3vw" height="3vw" src={Dash}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="14vw"
              borderRadius="10px"
              bg="#EDF6F9"
              padding="0.9vw 0"
            >
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                00:00:01:59
              </Text>
            </Box>

          </Flex>
          </Box>

          <Box
            height="1vw"
            border="2px"
            borderColor="#E5E5E5"
            borderBottomColor="#B5B5B5"
            marginBottom="1rem"
          />



        {/* ---------------------------- Bottom User Ranking is here ---------------------------- */}
          
          <Flex marginTop="1rem" paddingRight="0.9rem">
            <Box
              height="4vw"
              width="5vw"
              borderRadius="10px"
              bg="#EDF6F9"
              padding="0.9vw 0"
            >
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                No.
              </Text>
            </Box>
            
            <Spacer />
            
            <Box
              height="4vw"
              width="30vw"
              borderRadius="10px"
              bg="#EDF6F9"
              padding="0.9vw 0"
            >
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                Username
              </Text>
            </Box>
            
            <Spacer />
            
            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Wrong}></Image>
            </Box>
            
            <Spacer />

            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Wrong}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Wrong}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Wrong}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="4vw"
            >
            <Image width="4vw" height="4vw" src={Correct}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="4vw"
              padding="0.5vw"
            >
            <Image width="3vw" height="3vw" src={Dash}></Image>
            </Box>

            <Spacer />

            <Box
              height="4vw"
              width="14vw"
              borderRadius="10px"
              bg="#EDF6F9"
              padding="0.9vw 0"
            >
              <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                00:00:01:59
              </Text>
            </Box>

          </Flex>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Ranking;
