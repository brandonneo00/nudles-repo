import TopBarV2 from "./components/TopBarV2";
import logo from "./images/nudles-logo.PNG";
import {
  Center,
  FormControl,
  VStack,
  FormErrorMessage,
  Box,
  Input,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";

function ChangePassword() {
  return (
    <>
      <TopBarV2 />
      <div>
        <header className="logo-header">
          <img src={logo} className="welcome-logo" alt="nudles_logo" />
        </header>
      </div>

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
                    <Field
                      as={Input}
                      type="email"
                      id="email"
                      name="email"
                      variant="filled"
                      placeholder="Email Address"
                    />
                  </FormControl>

                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      variant="filled"
                      validate={(value) => {
                        let error;

                        if (value.length < 5) {
                          error = "Password must contain at least 6 characters";
                        }

                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
                    <Field
                      as={Input}
                      id="confirmPassword"
                      name="confirmPassword"
                      type="confirmPassword"
                      placeholder="Confirm Password"
                      variant="filled"
                      validate={(value) => {
                        let error;

                        if (value.length < 5) {
                          error = "Password must contain at least 6 characters";
                        }

                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
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
                      Change Password
                    </Box>
                  </div>
                </VStack>
              </form>
            )}
          </Formik>
        </Center>
      </body>
    </>
  );
}

export default ChangePassword;
