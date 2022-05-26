import TopBar from "./components/TopBar";
import { Formik, Field } from "formik";
import { Input, Box, VStack, HStack, Checkbox, Text } from "@chakra-ui/react";
import logo from "./images/nudles-logo.PNG";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Center,
} from "@chakra-ui/react";

function CreateAccount() {
  return (
    <>
      <TopBar></TopBar>
      <div>
        <header className="logo-header">
          <img src={logo} className="welcome-logo" alt="nudles_logo" />
        </header>
      </div>

      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start" alignItems="center">
              <HStack>
                <FormControl>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    placeholder="Email Address"
                  />
                </FormControl>

                <FormControl>
                  <Field
                    as={Input}
                    id="username"
                    name="username"
                    type="username"
                    variant="filled"
                    placeholder="Username"
                  />
                </FormControl>
              </HStack>

              <HStack>
                <FormControl isInvalid={!!errors.password && touched.password}>
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

                <FormControl isInvalid={!!errors.password && touched.password}>
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
              </HStack>
              <HStack>
                <Field
                  as={Checkbox}
                  id="applyAccount"
                  name="applyAccount"
                  colorScheme="orange"
                >
                  <Text width="193px" fontSize="sm" noOfLines={2}>
                    {" "}
                    <strong>Apply for Admin Account</strong> (Only for
                    Professors/TA)
                  </Text>
                </Field>

                <FormControl>
                  <Field
                    as={Input}
                    id="nusnetID"
                    name="nusnetID"
                    variant="filled"
                    placeholder="NUSNET ID"
                  />
                </FormControl>
              </HStack>
            </VStack>
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
          </form>
        )}
      </Formik>
    </>
  );
}

export default CreateAccount;
