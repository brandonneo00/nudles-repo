import {
  Box,
  HStack,
  Text,
  Tooltip,
  SimpleGrid,
  Image,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { db } from "../../firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";
import deleteButton from "../../images/bin.png";
import _ from "lodash";

function ModulesDisplay() {
  const { user } = useAuthContext();
  const [buttonclick, setButtonClick] = useState(false);
  const [likedArray, setLikedArray] = useState("");
  const [disable, setDisable] = useState(true);

  var helperArr = [];
  var newArr = [];

  const handleClick = async () => {
    const docRef = doc(db, "likedmodules", user.uid);
    const docSnap = await getDoc(docRef);
    setLikedArray("");
    if (docSnap.exists()) {
      // console.log("document exist");
      helperArr = docSnap.data().modarray;
      setLikedArray(helperArr);
    }

    // If document does not exist means new user or user has not added any modules -->

    if (buttonclick) {
      setButtonClick(false);
    } else {
      setButtonClick(true);
    }
  };

  const handleDelete = async (
    ay,
    creatoruid,
    creatorusername,
    modcode,
    modname,
    term
  ) => {
    const ref = doc(db, "likedmodules", user.uid);
    const refSnap = await getDoc(ref);
    const target = {
      academicyear: ay,
      creatoruid: creatoruid,
      creatorusername: creatorusername,
      modulecode: modcode,
      modulename: modname,
      term: term,
    };
    if (refSnap.exists()) {
      newArr = refSnap.data().modarray;
      var res = [];

      for (let i = 0; i < newArr.length; i++) {
        if (!_.isEqual(newArr[i], target)) {
          res.push(newArr[i]);
        }
      }
      setLikedArray(res);
      await setDoc(ref, { modarray: res });
    }
  };

  const handleEdit = () => {
    setDisable(!disable);
  };

  return (
    <>
      <Box margin="3% 4% 0%">
        <Box marginBottom="2vw" alignItems="left">
          <HStack spacing="3vw">
            <Text
              fontSize="2.5vw"
              fontWeight="semibold"
              color="#000000"
              lineHeight="1.3"
              align="left"
            >
              Select a Module to begin
            </Text>
            <Box
              as="button"
              height="3vw"
              lineHeight="1.2"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              border="0px"
              width="12vw"
              borderRadius="10px"
              fontSize="1.2vw"
              fontWeight="semibold"
              bg={!buttonclick ? "#F7B556" : "#D4A373"}
              borderColor=""
              color={!buttonclick ? "#000000" : "#FFFFFF"}
              _hover={!buttonclick ? { bg: "#DBA14D" } : { bg: "#C0956B" }}
              _active={
                !buttonclick
                  ? {
                      bg: "#F7B556",
                      transform: "scale(0.98)",
                      borderColor: "",
                    }
                  : {
                      bg: "#D4A373",
                      transform: "scale(0.98)",
                      borderColor: "",
                    }
              }
              _focus={{
                boxShadow:
                  "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
              }}
              onClick={handleClick}
            >
              {!buttonclick ? "Show Modules" : "Hide Modules"}
            </Box>
          </HStack>
        </Box>

        {buttonclick ? (
          likedArray.toString() !== "" ? (
            <>
              <Box
                as="button"
                height="3vw"
                lineHeight="1.2"
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                border="0px"
                width="12vw"
                borderRadius="10px"
                fontSize="1.2vw"
                fontWeight="semibold"
                bg={disable ? "#E5E5E5" : "#8FBA86"}
                borderColor=""
                color={disable ? "#000000" : "#ffffff"}
                _hover={disable ? { bg: "#BFBFBF" } : { bg: "#82A77A" }}
                _active={
                  disable
                    ? {
                        bg: "#E5E5E5",
                        transform: "scale(0.98)",
                        borderColor: "",
                      }
                    : {
                        bg: "#8FBA86",
                        transform: "scale(0.98)",
                        borderColor: "",
                      }
                }
                _focus={{
                  boxShadow:
                    "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                }}
                marginBottom="2vw"
                onClick={handleEdit}
              >
                {disable ? "Edit Modules" : "Done Editing"}
              </Box>
              <SimpleGrid columns={4} spacing="3vw">
                {likedArray.map((obj, index) => (
                  <HStack spacing="0" key={index}>
                    <Link
                      to={{
                        pathname: "/Play",
                        state: { obj: obj },
                      }}
                    >
                      <Box
                        as="button"
                        key={index}
                        borderLeftRadius="15px"
                        borderRightRadius="0px"
                        width="18vw"
                        height="8.333vw"
                        bg="#E5E5E5"
                        _hover={{ bg: "#C7C7C7" }}
                        _active={{
                          bg: "#E5E5E5",
                          transform: "scale(0.98)",
                          borderColor: "",
                        }}
                        _focus={{
                          boxShadow:
                            "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                        }}
                      >
                        <Text
                          fontSize="1.042vw"
                          fontWeight="semibold"
                          color="#686B6F"
                          align="left"
                          margin="1% 5% 0%"
                        >
                          {obj.modulecode}
                        </Text>
                        <Tooltip
                          label={obj.modulename}
                          placement="bottom-start"
                        >
                          <Text
                            fontSize="1.250vw"
                            fontWeight="semibold"
                            color="#000000"
                            align="left"
                            margin="0% 5% 3%"
                            noOfLines={1}
                          >
                            {obj.modulename}
                          </Text>
                        </Tooltip>
                        <Text
                          fontSize="1.042vw"
                          fontWeight="semibold"
                          color="#686B6F"
                          align="left"
                          margin="0% 5%"
                        >
                          {"AY " + obj.academicyear + " " + obj.term}
                        </Text>
                        <Tooltip
                          label={obj.creatorusername}
                          placement="bottom-start"
                        >
                          <Text
                            fontSize="1.042vw"
                            fontWeight="semibold"
                            color="#686B6F"
                            align="left"
                            margin="0% 5%"
                            noOfLines={1}
                          >
                            {obj.creatorusername}
                          </Text>
                        </Tooltip>
                      </Box>
                    </Link>
                    <Button
                      height="8.333vw"
                      lineHeight="1.2"
                      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                      border="0px"
                      borderRightRadius="15px"
                      borderLeftRadius="0px"
                      fontSize="1.2vw"
                      fontWeight="semibold"
                      bg="#FFD8D8"
                      borderColor=""
                      color="#000000"
                      _hover={{ bg: "#EDC9C9" }}
                      _active={{
                        bg: "#FFD8D8",
                        transform: "scale(0.98)",
                        borderColor: "",
                      }}
                      _focus={{
                        boxShadow:
                          "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                      }}
                      padding="0.3vw"
                      onClick={() => {
                        handleDelete(
                          obj.academicyear,
                          obj.creatoruid,
                          obj.creatorusername,
                          obj.modulecode,
                          obj.modulename,
                          obj.term
                        );
                      }}
                      isDisabled={disable}
                    >
                      <Image src={deleteButton} alt="Delete-button" />
                    </Button>
                  </HStack>
                ))}
              </SimpleGrid>
            </>
          ) : (
            <Box textAlign="left">
              <Text
                fontSize="2vw"
                fontWeight="normal"
                color="#000000"
                lineHeight="1.3"
                align="left"
                marginBottom="1vw"
              >
                Please Start By Adding Modules
              </Text>

              <Link to="Search">
                <Box
                  as="button"
                  height="3vw"
                  lineHeight="1.2"
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  border="0px"
                  width="10vw"
                  borderRadius="10px"
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
                  Start Here
                </Box>
              </Link>
            </Box>
          )
        ) : null}
      </Box>
    </>
  );
}

export default ModulesDisplay;
