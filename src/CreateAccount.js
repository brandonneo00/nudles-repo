import TopBar from "./components/TopBar";
import { Formik, Field } from "formik";
import logo from "./images/nudles-logo.PNG";
import {
  FormControl,
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Input,
  Box,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSignup } from "./hooks/useSignup";

function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const { error, signup } = useSignup();
  const [finalerror, setFinalError] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFinalError(null);
    if (password !== confirmpassword) {
      console.log("password mismatch!");
      setFinalError("Password mismatch!");
    } else {
      signup(email, password);
    }
  };

  return (
    <>
      <TopBar></TopBar>

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
                  id="email"
                  name="email"
                  type="email"
                  variant="filled"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </FormControl>
            </Box>

            <Box width="444px">
              <FormControl isRequired>
                <Field
                  as={Input}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  variant="filled"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </FormControl>
            </Box>

            <Box width="444px">
              <FormControl
                isRequired
                isInvalid={!(password === confirmpassword)}
              >
                <Field
                  as={Input}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  variant="filled"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmpassword}
                />
              </FormControl>
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
                Create Account
              </Box>
            </Center>
            <Box width="444px">
              {(finalerror || error) && (
                <Alert
                  status="error"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  marginTop="0.5rem"
                >
                  <AlertIcon />
                  <AlertTitle>Error: </AlertTitle>
                  <AlertDescription>
                    {finalerror === null ? error : finalerror}
                  </AlertDescription>
                </Alert>
              )}
            </Box>
          </VStack>
        </form>
      </Formik>
    </>
  );
}

export default CreateAccount;
