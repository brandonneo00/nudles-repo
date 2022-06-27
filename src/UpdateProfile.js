import TopBarV2 from "./components/TopBarV2";
import logo from "./images/nudles-logo.PNG";
import {
  VStack,
  FormControl,
  Input,
  Checkbox,
  Text,
  Center,
  Box,
} from "@chakra-ui/react";

import { Formik, Field } from "formik";
import { useState } from "react";

// firebase imports
import { db } from "./firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { useCollection } from "./hooks/useCollection";

// specific for UID of users
import { useAuthContext } from "./hooks/useAuthContext";

import { useHistory, Link } from "react-router-dom";

function UpdateProfile() {
  const [checkbox, setCheckBox] = useState("");
  const [_username, setUsername] = useState("");
  const [_nusnetid, setNusNetID] = useState("");
  const { user } = useAuthContext();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ref = collection(db, "userprofiles");

    await addDoc(ref, {
      admin: checkbox,
      username: _username,
      nusnet: _nusnetid,
      uid: user.uid,
    });
    setCheckBox("");
    setUsername("");
    setNusNetID("");
    setTimeout(() => history.push("/Welcome"), 300);
  };

  const { documents: userprofiles } = useCollection("userprofiles", [
    "uid",
    "==",
    user.uid,
  ]);

  return (
    <>
      <TopBarV2 />

      <div>
        <header className="logo-header">
          <img src={logo} className="welcome-logo" alt="nudles_logo" />
        </header>
      </div>

      <Formik>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="flex-start" alignItems="center">
            <Box width="444px">
              <FormControl isRequired>
                <Field
                  as={Input}
                  id="username"
                  name="username"
                  type="username"
                  variant="filled"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={_username}
                />
              </FormControl>
            </Box>

            <Box width="444px">
              <FormControl isRequired>
                <Field
                  as={Input}
                  id="nusnetID"
                  name="nusnetID"
                  variant="filled"
                  placeholder="NUSNET ID (e.g. E1234567)"
                  onChange={(e) => setNusNetID(e.target.value)}
                  value={_nusnetid}
                />
              </FormControl>
            </Box>

            <Box width="444px">
              <Field
                as={Checkbox}
                id="applyAccount"
                name="applyAccount"
                colorScheme="orange"
                onChange={(e) => setCheckBox(true)}
                value={checkbox}
              >
                <Text width="193px" fontSize="sm" noOfLines={2}>
                  {" "}
                  <strong>Apply for Admin Account</strong> (Only for
                  Professors/TA)
                </Text>
              </Field>
            </Box>

            <Center>
              <Box
                as="button"
                height="57px"
                lineHeight="1.2"
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                border="0px"
                width="444px"
                borderRadius="15px"
                fontSize="20px"
                fontWeight="semibold"
                bg="#F7B556"
                borderColor=""
                color="#000000"
                margin="1.5% 0%"
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
              >
                Update Profile
              </Box>
            </Center>
          </VStack>
        </form>
      </Formik>
    </>
  );
}

export default UpdateProfile;
