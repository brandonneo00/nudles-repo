import {
    Box,
    HStack,
    Text,
    Tooltip,
    SimpleGrid,
    Image,
    Button,
    ButtonGroup,
    VStack,
    IconButton,
    Icon,
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  import { db } from "../../firebase/config";
  import { doc, getDoc, setDoc } from "firebase/firestore";
  import { useAuthContext } from "../../hooks/useAuthContext";
  import { useState } from "react";
  import deleteButton from "../../images/bin.png";
  import rankingButton from "../../images/ranking.png";
  import _ from "lodash";
  
  function DisplayBox(props) {
    return (
          <HStack spacing="0" key={props.index} data-testid="module-grid">
            <Link
              to={{
                pathname: "/Play",
                state: { obj: props.obj },
              }}
            >
              <Box
                as="button"
                key={props.index}
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
                opacity="0.9"
              >
                <Text
                  fontSize="1.042vw"
                  fontWeight="semibold"
                  color="#686B6F"
                  align="left"
                  margin="1% 5% 0%"
                >
                  {props.obj.modulecode}
                </Text>
                <Tooltip label={props.obj.modulename} placement="bottom-start">
                  <Text
                    fontSize="1.250vw"
                    fontWeight="semibold"
                    color="#000000"
                    align="left"
                    margin="0% 5% 3%"
                    noOfLines={1}
                  >
                    {props.obj.modulename}
                  </Text>
                </Tooltip>
                <Text
                  fontSize="1.042vw"
                  fontWeight="semibold"
                  color="#686B6F"
                  align="left"
                  margin="0% 5%"
                >
                  {"AY " + props.obj.academicyear + " " + props.obj.term}
                </Text>
                <Tooltip label={props.obj.creatorusername} placement="bottom-start">
                  <Text
                    fontSize="1.042vw"
                    fontWeight="semibold"
                    color="#686B6F"
                    align="left"
                    margin="0% 5%"
                    noOfLines={1}
                  >
                    {props.obj.creatorusername}
                  </Text>
                </Tooltip>
              </Box>
            </Link>
            <ButtonGroup flexDirection="column" isAttached>
              <Button
                height="4.1665vw"
                lineHeight="1.2"
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                border="0px"
                borderTopRightRadius="15px"
                borderBottomRightRadius="0px"
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
                padding="0.5vw"
                as={IconButton}
                icon={
                  <Image src={deleteButton} alt="delete-logo" boxSize="2vw" />
                }
                onClick={() => {
                  props.handleDelete(
                    props.obj.academicyear,
                    props.obj.creatoruid,
                    props.obj.creatorusername,
                    props.obj.modulecode,
                    props.obj.modulename,
                    props.obj.term
                  );
                }}
                isDisabled={props.disable}
              >
              </Button>
              <Link
                to={{
                  pathname: "/Ranking",
                  state: {
                    obj: {
                      modcode: props.obj.modulecode,
                      modulename: props.obj.modulename,
                      ay: props.obj.academicyear,
                      term: props.obj.term,
                      createdby: props.obj.creatorusername,
                      creatoruid: props.obj.creatoruid,
                    },
                  },
                }}
              >
                <Button
                  height="4.1665vw"
                  lineHeight="1.2"
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  border="0px"
                  borderTopRightRadius="0px"
                  borderBottomRightRadius="15px"
                  borderLeftRadius="0px"
                  fontSize="1.2vw"
                  fontWeight="semibold"
                  bg="#DBEEFF"
                  borderColor=""
                  color="#000000"
                  _hover={{ bg: "#C9DBEC" }}
                  _active={{
                    bg: "#DBEEFF",
                    transform: "scale(0.98)",
                    borderColor: "",
                  }}
                  _focus={{
                    boxShadow:
                      "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                  }}
                  padding="0.5vw"
                  as={IconButton}
                  icon={
                    <Image
                      src={rankingButton}
                      alt="leaderboard-logo"
                      boxSize="2.5vw"
                    />
                  }
                ></Button>
              </Link>
            </ButtonGroup>
          </HStack>

    );
  }
  
  export default DisplayBox;
  