import TopBarV2 from "./components/TopBarV2";
import { Center, Text, Image } from "@chakra-ui/react";
import work from "./images/work-in-progress.png";

function Play(){
    return (
        <div>
          <TopBarV2 />
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
              (DAILY NUDLES)
            </Text>
          </Center>
        </div>
      );
}

export default Play;