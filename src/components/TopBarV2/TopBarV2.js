import { Box, Flex, Spacer } from "@chakra-ui/react";
import "./TopBarV2.css";
import logo from "../../images/nudles-logo.PNG";
import LeftDrawer from "../LeftDrawer";
import logoutimg from "../../images/logout.png";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

function TopBarV2() {
  const { logout } = useLogout();

  return (
    <>
      <div className="top-bar2">
        <Flex>
          <LeftDrawer></LeftDrawer>
          <Spacer />
          <Link to="/Welcome">
            <img src={logo} className="nudles-logo" alt="nudles_logo" />
          </Link>
          <Spacer />
          <Link to="/">
            <Box as="button" onClick={logout}>
              <img src={logoutimg} className="logout-logo" alt="logout" />
            </Box>
          </Link>
        </Flex>
      </div>
    </>
  );
}

export default TopBarV2;
