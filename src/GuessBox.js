import { Center, Text, Grid, GridItem, Input, Box, HStack } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";

import { Field, Formik } from "formik";
function GuessBox(props) {
  // const [guess, setGuess] = useState("");
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setGuess(null);
  // };
  return (
    <Grid margin="0.5px">
      <Center>
        <GridItem
          bg="#FFFFFF"
          borderRadius="15px"
          borderWidth="5px"
          borderColor="#E5E5E5"
          margin="0.4rem"
          padding="0% 1.5%"
          width="26.042vw"
          height="3.646vw"
        >
          {/* <Text align="center" fontSize="2.083vw" fontWeight="bold">
            Guesses
          </Text> */}
          <Formik>
            <form onSubmit={props.enter}>
              <FormControl color="black">
                <HStack>
                <Field
                  as={Input}
                  id="guess"
                  name="guess"
                  variant="unstyled"
                  onChange={props.onChange1}
                  value={props.value1}
                  textAlign="center"
                  fontWeight="bold"
                  fontSize="2.083vw"
                  isDisabled={props.permission}
                />
                </HStack>
              </FormControl>
            </form>
          </Formik>
        </GridItem>
      </Center>
    </Grid>
  );
}

export default GuessBox;
