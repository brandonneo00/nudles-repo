import {
  Input,
  Box,
  FormControl,
  VStack,
  FormErrorMessage,
  Checkbox,
} from "@chakra-ui/react";
import React from "react";
import { Formik, Field, FormLabel } from "formik";

function InputForm() {
  return (
    <Formik>
    <FormControl isRequired>
      <Input id="first-name" placeholder="First name" />
    </FormControl>
    </Formik>
  );
}

export default InputForm;
