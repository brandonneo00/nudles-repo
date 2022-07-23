import {
  Input,
  Box,
  FormControl,
  VStack,
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
} from "@chakra-ui/react";
import React from "react";
import { Formik, Field } from "formik";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

function LoginFields() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <Formik>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="flex-start">
          <FormControl isRequired>
            <Field
              as={Input}
              id="email"
              name="email"
              type="email"
              variant="filled"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              data-testid = "emailInput"
            />
          </FormControl>
          <FormControl isRequired>
            <Field
              as={Input}
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              variant="filled"
              onChange={(e) => setPassword(e.target.value)}
              data-testid = "passwordInput"
            />
          </FormControl>
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
            data-testid = "submitButton"
          >
            Login
          </Box>
          {error && (
            <Alert
              status="error"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              marginTop="1rem"
              fontSize="md"
            >
              <AlertIcon />
              <AlertTitle>Error: </AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </VStack>
      </form>
    </Formik>
  );
}

export default LoginFields;
