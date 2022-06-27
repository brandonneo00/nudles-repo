import TopBar from "./components/TopBar";
import logo from "./images/nudles-logo.PNG";
import {
  Center,
  FormControl,
  VStack,
  Text,
  Box,
  Input,
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import { useState } from "react";
import { useResetpassword } from "./hooks/useResetpassword";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const { error, resetpassword } = useResetpassword();
  const [success, setSuccess] = useState("");
  const [finalerror, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(null);

    await resetpassword(email);

    setError(error);
    console.log(finalerror);

    const checker = () => {
      if (finalerror === "") {
        setSuccess(true);
        console.log("Set success to true");
      }
    };
    setTimeout(checker, 500);
    setError("");
  };

  return (
    <>
      <TopBar></TopBar>
      <div>
        <header className="logo-header">
          <img src={logo} className="welcome-logo" alt="nudles_logo" />
        </header>
        <body>
          <Center>
            <Formik>
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl isRequired>
                    <Text
                      fontSize="20px"
                      fontWeight="semibold"
                      color="#000000"
                      width="444px"
                      lineHeight="1.5"
                      align="justify"
                      margin="0% 0% 5% 0%"
                    >
                      Forgot your password? Please enter your email address
                      below. You will receive a link to reset your password
                    </Text>
                    <Field
                      as={Input}
                      type="email"
                      id="email"
                      name="email"
                      variant="filled"
                      placeholder="Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </FormControl>

                  <div className="send-box">
                    <Box
                      as="button"
                      height="57px"
                      lineHeight="1.2"
                      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                      border="0px"
                      width="444px"
                      margin="3% 0%"
                      borderRadius="15px"
                      fontSize="20px"
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
                    >
                      Send
                    </Box>
                    <Box width="444px">
                      {(error && (
                        <Alert
                          status="error"
                          alignItems="center"
                          justifyContent="center"
                          textAlign="center"
                          marginTop="0.5rem"
                        >
                          <AlertIcon />
                          <AlertTitle>Error: </AlertTitle>
                          <AlertDescription>{error}</AlertDescription>
                        </Alert>
                      )) ||
                        (success && (
                          <Alert
                            status="success"
                            alignItems="center"
                            justifyContent="center"
                            textAlign="center"
                            marginTop="0.5rem"
                          >
                            <AlertIcon />
                            <VStack alignItems="left" spacing={0}>
                              <AlertTitle align="left">Success! </AlertTitle>
                              <AlertDescription maxWidth="444px">
                                Please check your email for the password reset
                                link
                              </AlertDescription>
                            </VStack>
                          </Alert>
                        ))}
                    </Box>
                  </div>
                </VStack>
              </form>
            </Formik>
          </Center>
        </body>
      </div>
    </>
  );
}
export default ForgetPassword;
