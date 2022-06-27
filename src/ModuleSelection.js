import TopBarV2 from "./components/TopBarV2";
import {
  Box,
  HStack,
  VStack,
  Text,
  Center,
  Container,
  Flex,
  Spacer,
  Grid,
  GridItem,
  Textarea,
  Input,
  FormControl,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  FormLabel,
  Select,
  Heading,
  Tooltip,
  LinkOverlay,
  LinkBox
} from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import { db } from "./firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { useAuthContext } from "./hooks/useAuthContext";
import { useState, useEffect } from "react";
// import { useRestrict } from "./hooks/useRestrict";

function ModuleSelection() {
  const { user } = useAuthContext();
  const [buttonclick, setButtonClick] = useState(false);
  const [likedArray, setLikedArray] = useState("");
  // const { fromMS, checkFromMS } = useRestrict();
  let history = useHistory();
  //get user.uid data from the likedmodules collection
  
  var helperArr = [];
  
  // const docRef = doc(db, "likedmodules", user.uid);
  // const snapShot = async () => {
  //   const docSnap = await getDoc(docRef);
  //   setLikedArray("");
  //   if (docSnap.exists()) {
  //     helperArr = docSnap.data().modarray;
  //     setLikedArray(helperArr);
  //   }
  // };
  // snapShot();

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

  
  const handleClick = async () => {
    const docRef = doc(db, "likedmodules", user.uid);
    const docSnap = await getDoc(docRef);
    setLikedArray("");
    if (docSnap.exists()) {
      helperArr = docSnap.data().modarray;
      setLikedArray(helperArr);
    }
    
    if (buttonclick){
      setButtonClick(false)
    } else {
    setButtonClick(true);
  }}
  return (
    <div>
      <TopBarV2 />
      <Box margin="2% 2% 0%">
        <Box marginBottom="1rem" alignItems="left">
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
              height="2.5vw"
              lineHeight="1.2"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              border="0px"
              width="12vw"
              borderRadius="10px"
              fontSize="1.2vw"
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
              Show Modules
            </Box>
          </HStack>
        </Box>

        <HStack padding={0} spacing="2vw">
          {buttonclick &&
            likedArray.map((obj, index) => (
              <Link to={{
                pathname: "/Play",
                state: {obj: obj}
              }}
              key={index}
              // onClick={() => {
              //   checkFromMS();
              //   console.log(fromMS + " this is from ms");
              //   return history.push("/Play");
              // }}
              >
              <Box
                as="button"
                key={index}
                borderRadius="15px"
                width="18.594vw"
                height="8.333vw"
                bg="#E5E5E5"
                _hover={{ bg: "#C7C7C7" }}
                _active={{
                bg: "#E5E5E5",
                transform: "scale(0.98)",
                borderColor: ""
              }}
              _focus={{
                boxShadow:
                  "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
              }}
              // onClick={checkFromMS}
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
                  label={
                    <ModuleNameAPI ay={obj.academicyear} mc={obj.modulecode}>
                      {" "}
                    </ModuleNameAPI>
                  }
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
                    <ModuleNameAPI ay={obj.academicyear} mc={obj.modulecode}>
                      {" "}
                    </ModuleNameAPI>
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
                <Tooltip label={obj.creatorusername} placement="bottom-start">
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
             
            ))}
        </HStack>
      </Box>
    </div>
  );
}

export default ModuleSelection;
