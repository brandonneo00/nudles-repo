import {
  Box,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Text,
  Image,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import "./TopBarV2.css";
import logo from "../../images/nudles-logo.PNG";
import LeftDrawer from "../LeftDrawer";
import logout from "../../images/logout.png";
import { Link } from "react-router-dom";

function TopBarV2() {
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
          <img src={logout} className="logout-logo" alt="logout" />
        </Link>

      </Flex>

    </div>

   
    </>
  );
}

export default TopBarV2;
