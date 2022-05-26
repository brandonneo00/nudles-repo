import TopBar from "./components/TopBar";
import logo from "./images/nudles-logo.PNG";
import {
  Input,
  Box,
  FormControl,
  VStack,
  FormErrorMessage,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Formik, Field } from "formik";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <>
      <TopBar />

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

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
                <VStack spacing={4} align="flex-start">
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
                  <Field
                    as={Checkbox}
                    id="rememberMe"
                    name="rememberMe"
                    colorScheme="orange"
                  >
                    Remember me?
                  </Field>
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
                    Admin Login
                  </Box>
                </VStack>
              </form>
            )}
          </Formik>

          <br></br>

          <VStack spacing={8}>
            <Button colorScheme="" color="black" variant="link">
              <Link to="/">Student Login</Link>
            </Button>
            <Button colorScheme="" color="black" variant="link">
              <Link to="/ForgetPassword">Forget Password</Link>
            </Button>
            <Button colorScheme="" color="black" variant="link">
              <Link to="/CreateAccount">Create Account</Link>
            </Button>
          </VStack>
        </header>
      </div>
    </>
  );
};

export default AdminLogin;
