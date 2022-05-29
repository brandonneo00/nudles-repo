import { Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function AdditionalButtons() {
  return (
    <VStack spacing={8}>
      <Button colorScheme="" color="black" variant="link">
        <Link to="/ForgetPassword">Forget Password</Link>
      </Button>
      <Button colorScheme="" color="black" variant="link">
        <Link to="/CreateAccount">Create Account</Link>
      </Button>
      {/* <Button colorScheme="" color="black" variant="link">
        <Link to="/AdminLogin">Admin Login</Link>
      </Button> */}
    </VStack>
  );
}

export default AdditionalButtons;
