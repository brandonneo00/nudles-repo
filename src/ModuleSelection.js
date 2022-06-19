import TopBarV2 from "./components/TopBarV2";
import {
  Box,
  HStack,
  VStack,
  Text,
  Center,
  Container,
  Flex,
  Spacer,
  Grid,
  GridItem,
  Textarea,
  Input,
  FormControl,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  FormLabel,
  Select,
  Heading,
} from "@chakra-ui/react";

function ModuleSelection() {
  return (
    <div>
      <TopBarV2 />
      <VStack spacing="1rem" align="flex-start" margin="2% 2% 0%">
        <Box alignItems="left">
          <Text
            fontSize="2.5vw"
            fontWeight="semibold"
            color="#000000"
            lineHeight="1.3"
            align="left"
          >
            Select a Module to begin
          </Text>
        </Box>
        <Box borderRadius="15px" width="18.594vw" height="8.333vw" bg="#E5E5E5">
          <Text
            fontSize="1.042vw"
            fontWeight="semibold"
            color="#686B6F"
            align="left"
            margin="4% 5% 0%"
          >
            MODULE CODE
          </Text>
          <Text
            fontSize="1.250vw"
            fontWeight="semibold"
            color="#000000"
            align="left"
            margin="0% 5% 3%"
          >
            Programming Methodology
          </Text>
          <Text
            fontSize="1.042vw"
            fontWeight="semibold"
            color="#686B6F"
            align="left"
            margin="0% 5%"
          >
            AY 21/22 Semester 1
          </Text>
          <Text
            fontSize="1.042vw"
            fontWeight="semibold"
            color="#686B6F"
            align="left"
            margin="0% 5%"
          >
            Nudles Admin
          </Text>
        </Box>
      </VStack>
    </div>
  );
}

export default ModuleSelection;
