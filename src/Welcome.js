import TopBarV2 from "./components/TopBarV2";
import logo from "./images/nudles-logo.PNG";
import "./Welcome.css";
import work from "./images/work-in-progress.png";
import { Center, Square, Circle } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Box, Image, Text, Flex, Spacer} from "@chakra-ui/react";

function MotivationalQuote() {
  const [quote, setQuote] = useState("Loading Motivational Quote.....");
  useEffect(() => {
    fetch("https://api.goprogram.ai/inspiration")
      .then((response) => response.json())
      .then((data) => setQuote(data.quote))
      .catch((error) => setQuote(`Unable to retrieve Quote: ${error}`));
  }, []);
  
  return quote;
}

function Welcome() {
  return (
    <>
      <TopBarV2 />
      <div>
        <header className="logo-header">
          <img src={logo} className="welcome-logo" alt="nudles_logo" />
        </header>
      </div>

      <Center bg="#FFFFFF00" color="black">
        <Text fontSize="48px" fontWeight="semibold" color="#83C5BE" align="center">
          Welcome UserRamen!
        </Text>
      </Center>
      <Center bg="#FFFFFF00" color="black">
        <Text as="em" fontSize="44px" fontWeight="normal" color="#000000" align='center' margin='2% 5%'>
          "<MotivationalQuote></MotivationalQuote>"
        </Text>
      </Center>
      <div className='module-page'>
      <Center>
        <Box className="dotted-box" width='5%' borderTopColor='D4D6DA' borderTopWidth='1rem' borderTopStyle='dotted' margin='8%'>
        </Box>
        </Center>
        <Box padding='5%'> 
        <Text fontSize="48px" fontWeight="semibold" color="#000000" align="left">
          Modules Added
        </Text>
        <Center bg="#FFFFFF00" height="40rem">
      <Image
        boxSize="30rem"
        src={work}
        alt="Work-in-progress"
      />
      </Center>
      <Center bg="#FFFFFF00" color="black">
        <Text
          fontSize="60px"
          fontWeight="bold"
          color="#000000"
          align="center"
        >
          (MODULES ADDED)
        </Text>
      </Center>
        </Box>
      </div>
    </>
  );
}
export default Welcome;
