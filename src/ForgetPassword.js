import TopBarV2 from "./components/TopBarV2";
import logo from "./images/nudles-logo.PNG";
import {
  Center,
  FormControl,
  VStack,
  HStack,
  Text,
  Box,
  Input,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";

function ForgetPassword() {
  return (
    <>
      <TopBarV2></TopBarV2>
      <div>
        <header className="logo-header">
          <img src={logo} className="welcome-logo" alt="nudles_logo" />
        </header>
        <body>
          <Center>
            <Formik
              initialValues={{
                email: "",
              }}
              onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
              }}
            >
              {({ handleSubmit, errors, touched }) => (
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
                        Forgot your password? Please enter your email address below. You will receive a link to reset your password
                      </Text>
                      <Field
                        as={Input}
                        type="email"
                        id="email"
                        name="email"
                        variant="filled"
                        placeholder="Email Address"
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
                    </div>
                  </VStack>
                </form>
              )}
            </Formik>
          </Center>
        </body>
      </div>
    </>
  );
}
export default ForgetPassword;
