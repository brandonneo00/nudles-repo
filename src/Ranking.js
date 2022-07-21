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
  Image,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { db } from "./firebase/config";
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { useState, useRef } from "react";
import TopBarV2 from "./components/TopBarV2";
import Correct from "./images/checked.png";
import Wrong from "./images/cancel.png";
// import Null from "./images/null.png";
// import NotApplicable from "./images/not-applicable.png";
import Dash from "./images/dash.png";
import { useAuthContext } from "./hooks/useAuthContext";
import _ from "lodash";


function Ranking() {
  const location = useLocation();
  const { obj } = location.state;
  const { user } = useAuthContext();
  const [buttonclick, setButtonClick] = useState(false);
  const [sorted, setSorted] = useState("");
  const [userdata, setUserData] = useState("");

  //queryForTheDay is used to query against the fortheday collection
  // to extract the questionid of the selected module of the question that is set for the day
  const queryForTheDay = async () => {
    var targetQID = "";
    var helper = [];
    // creating reference to the fortheday collection
    const ref = collection(db, "fortheday");
    //creating query against the collection
    const q = query(
      ref,
      where("modulecode", "==", obj.modcode),
      where("ay", "==", obj.ay),
      where("term", "==", obj.term),
      where("creatoruid", "==", obj.creatoruid)
    );
    //executing the query
    const forthedaySnapshot = await getDocs(q);
    forthedaySnapshot.forEach((doc) => {
      targetQID = doc.data().questionid;
    });
    helper = await formatData(
      obj.modcode,
      obj.ay,
      obj.term,
      obj.creatoruid,
      targetQID
    );
    console.log(targetQID + " qid");
    console.log(helper + " array");

    
    const userRef = doc(db, "modules", obj.modcode, obj.ay, obj.term, obj.creatoruid, targetQID, "ranking", user.uid);
    const userSnapshot = await getDoc(userRef);
    
    if (userSnapshot.exists()){
      setUserData(userSnapshot.data());
      console.log("this is indiv data " + userSnapshot.data())
    } else {
      const emptyUserData = {
        comparetime: "NIL",
        displaytime: "NIL",
        numtries: "NIL",
        tries: [null, null, null, null, null, null],
        username: obj.createdby
      };
      setUserData(emptyUserData);
    }
    

    return helper;
  };

  const formatData = async (mc, ay, term, creatoruid, qnid) => {
    var storingArray = [];
    const rankingCollection = collection(
      db,
      "modules",
      mc,
      ay,
      term,
      creatoruid,
      qnid,
      "ranking"
    );
    const querySnapshot = await getDocs(rankingCollection);
    querySnapshot.forEach((result) => {
      var tempArray = [];
      tempArray[0] = result.data().numtries;
      tempArray[1] = result.data().comparetime;
      tempArray[2] = result.data();
      // [3, 1658..., object]
      storingArray.push(tempArray);
    });

    return storingArray;
  };

  const merge = (left, right) => {
    let sortedArray = [];

    while (left.length && right.length) {
      if (left[0][0] < right[0][0]) {
        sortedArray.push(left.shift());
      } else if (left[0][0] === right[0][0]) {
        if (left[0][1] < right[0][1]) {
          sortedArray.push(left.shift());
        } else {
          sortedArray.push(right.shift());
        }
      } else {
        sortedArray.push(right.shift());
      }
    }

    return [...sortedArray, ...left, ...right];
  };

  const mergeSort = (array) => {
    // array: [ [numtries1, time1, object1], [numtries2, time2, object2], ...]
    // for (let i = 0; i < array.length; i++) {
    //   const numOfTries = array[i][0];
    // }

    const half = array.length / 2;
    if (array.length <= 1) {
      return array;
    }

    const left = array.splice(0, half);
    const right = array;
    return merge(mergeSort(left), mergeSort(right));
  };


  const handleClick = async () => {
    setButtonClick(!buttonclick);

    const data = await queryForTheDay();
    const sortedData = mergeSort(data);
    console.log(data + " unsorted Array");
    console.log(sortedData + " sorted Array");
    setSorted(sortedData);

    // const docRef = doc(db, "modules", "SF");
    // const docSnap = await getDoc(docRef);

    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // } else {
    //   // doc.data() will be undefined in this case
    //   console.log("No such document!");
    // }
   
  };

  const findMyRank = (userdata) => {
    var object = [userdata.numtries, userdata.comparetime, userdata];
    console.log( "this is my obj " + object)
    var ranking;
    var found = false;
    for (let i = 0; i < sorted.length; i++) {
      if (_.isEqual(sorted[i], object)) {
        found = true;
        ranking = i + 1;
        break;
      }
    }

    if (found) {
      return ranking;
    } else {
      return "NIL";
    }
  }
  return (
    <div>
      <TopBarV2 />
      {buttonclick ? (
        <Grid minHeight="40vw">
          <GridItem
            bg="#E5E5E5"
            borderRadius="15px"
            margin="2%"
            padding="2% 3%"
          >
            <Box>
              <Text
                fontSize="2vw"
                fontWeight="semibold"
                color="#000000"
                lineHeight="1.3"
                align="left"
              >
                {obj.modcode} {obj.modulename} {" AY "} {obj.ay} {" By "}{" "}
                {obj.createdby}
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
              {sorted &&
                  sorted.map((x, index) => (
                  <Flex key={index} marginBottom="1vw">
                    <Box
                      height="4vw"
                      width="5vw"
                      borderRadius="10px"
                      bg="#EDF6F9"
                      padding="0.9vw 0"
                    >
                      <Text
                        fontWeight="semibold"
                        textAlign="center"
                        fontSize="1.5vw"
                      >
                        {index + 1}
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
                      <Text
                        fontWeight="semibold"
                        textAlign="center"
                        fontSize="1.5vw"
                      >
                        {x[2].username}
                      </Text>
                    </Box>

                    <Spacer />

                    {x[2].tries.map((y, index) => {
                      if (y === true) {
                        return (
                          <>
                            <Box height="4vw" width="4vw" key={index}>
                              <Image
                                width="4vw"
                                height="4vw"
                                src={Correct}
                              ></Image>
                            </Box>
                            <Spacer />
                          </>
                        );
                      } else if (y === false) {
                        return (
                          <>
                            <Box height="4vw" width="4vw" key={index}>
                              <Image
                                width="4vw"
                                height="4vw"
                                src={Wrong}
                              ></Image>
                            </Box>
                            <Spacer />
                          </>
                        );
                      } else if (y === null) {
                        return (
                          <>
                            <Box height="4vw" width="4vw" padding="0.5vw" key={index}>
                              <Image
                                width="3vw"
                                height="3vw"
                                src={Dash}
                              ></Image>
                            </Box>
                            <Spacer />
                          </>
                        );
                      }
                    })}
                    
                    
                    <Box
                      height="4vw"
                      width="14vw"
                      borderRadius="10px"
                      bg="#EDF6F9"
                      padding="0.9vw 0"
                    >
                      <Text
                        fontWeight="semibold"
                        textAlign="center"
                        fontSize="1.5vw"
                      >
                        {x[2].displaytime}
                      </Text>
                    </Box>
                  </Flex>
                ))}

            </Box>
          <Box
            height="1vw"
            border="2px"
            borderColor="#E5E5E5"
            borderBottomColor="#B5B5B5"
            marginBottom="1rem"
          /> 

            {/* ---------------------------- Bottom User Ranking is here ---------------------------- */}

          {userdata && (
            <Flex marginTop="1rem" paddingRight="0.9rem">
              <Box
                height="4vw"
                width="5vw"
                borderRadius="10px"
                bg="#EDF6F9"
                padding="0.9vw 0"
              >
                <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                  {findMyRank(userdata)}
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
                  {userdata.username}
                </Text>
              </Box>

              <Spacer />

              {userdata.tries.map((y, index) => {
                      if (y === true) {
                        return (
                          <>
                            <Box height="4vw" width="4vw" key={index}>
                              <Image
                                width="4vw"
                                height="4vw" //??????
                                src={Correct}
                              ></Image>
                            </Box>
                            <Spacer />
                        </>
                        );
                      } else if (y === false) {
                        return (
                          <>
                            <Box height="4vw" width="4vw" key={index}>
                              <Image
                                width="4vw"
                                height="4vw"
                                src={Wrong}
                              ></Image>
                            </Box>
                            <Spacer />
                            </>
                        );
                      } else if (y === null) {
                        return (
                          <>
                            <Box height="4vw" width="4vw" padding="0.5vw" key={index}>
                              <Image
                                width="3vw"
                                height="3vw"
                                src={Dash}
                              ></Image>
                            </Box>
                            <Spacer />
                          </>
                        );
                      }
                    })}

              <Box
                height="4vw"
                width="14vw"
                borderRadius="10px"
                bg="#EDF6F9"
                padding="0.9vw 0"
              >
                <Text fontWeight="semibold" textAlign="center" fontSize="1.5vw">
                  {userdata.displaytime}
                </Text>
              </Box>
            </Flex>
          )}
            
          </GridItem>
        </Grid>
      ) : (
        <Center textAlign="center" minHeight="100vh">
          <Box
            as="button"
            height="6vw"
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            border="0px"
            width="20vw"
            borderRadius="15px"
            fontSize="2vw"
            fontWeight="semibold"
            bg="#F7B556"
            borderColor=""
            color="#000000"
            _hover={{ bg: "#DBA14D" }}
            _active={{
              bg: "#F7B556",
              transform: "scale(0.98)",
              borderColor: "",
            }}
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}
            onClick={handleClick}
          >
            Show Ranking
          </Box>
        </Center>
      )}
    </div>
  );
}

export default Ranking;
