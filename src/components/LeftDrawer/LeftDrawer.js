import play from "../../images/play-button-arrowhead.png";
import search from "../../images/search.png";
import input from "../../images/pencil.png";
import folder from "../../images/folder-grey.png";
import leaderboard from "../../images/bar-chart-grey.png";
import menu from "../../images/menu.png";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
  VStack,
  HStack,
  Box,
  Text,
  Image,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import "./LeftDrawer.css";

function LeftDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        className="drawer-button"
        onClick={onOpen}
        as={IconButton}
        variant="ghost"
        icon={
          <Box>
            <Image src={menu} alt="menu-logo" boxSize="3em" />
          </Box>
        }
        boxSize="5.9em"
        borderWidth="0px"
        bg="#ffffff00"
        _hover={{ bg: "#63B7AE" }}
        _active={{
          bg: "#83C5BE",
          transform: "scale(0.98)",
        }}
      ></Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Text fontSize="28px" fontWeight="semibold" color="#000000">
              DIRECTORY
            </Text>
          </DrawerHeader>
          <DrawerBody padding="0px">
            <VStack spacing={0}>
              <Box
                as="button"
                w="100%"
                _hover={{ bg: "#E5E5E5" }}
                _active={{
                  bg: "#FFFFFF",
                  transform: "scale(0.98)",
                }}
              >
                <NavLink to="Search" activeClassName="active">
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;
                  <HStack>
                    <Image
                      src={search}
                      alt="search-logo"
                      boxSize="50px"
                      padding="10px"
                      margin="0px 0px 0px 8px"
                    />

                    <Text fontSize="26px" fontWeight="semibold" color="#686B6F">
                      MODULE SEARCH
                    </Text>
                  </HStack>
                </NavLink>
              </Box>
              <Box
                as="button"
                w="100%"
                _hover={{ bg: "#E5E5E5" }}
                _active={{
                  bg: "#FFFFFF",
                  transform: "scale(0.98)",
                }}
              >
                <NavLink to="ModuleSelection" activeClassName="active">
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;
                  <HStack>
                    <Image
                      src={play}
                      alt="search-logo"
                      boxSize="50px"
                      padding="10px"
                      margin="0px 0px 0px 8px"
                    />
                    <Text fontSize="26px" fontWeight="semibold" color="#686B6F">
                      DAILY NUDLES
                    </Text>
                  </HStack>
                </NavLink>
              </Box>
              <Box
                as="button"
                w="100%"
                _hover={{ bg: "#E5E5E5" }}
                _active={{
                  bg: "#FFFFFF",
                  transform: "scale(0.98)",
                }}
              >
                <NavLink to="ResourceLibrary" activeClassName="active">
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;
                  <HStack>
                    <Image
                      src={folder}
                      alt="search-logo"
                      boxSize="50px"
                      padding="10px"
                      margin="0px 0px 0px 8px"
                    />
                    <Text fontSize="26px" fontWeight="semibold" color="#686B6F">
                      RESOURCE LIBRARY
                    </Text>
                  </HStack>
                </NavLink>
              </Box>
              <Box
                as="button"
                w="100%"
                _hover={{ bg: "#E5E5E5" }}
                _active={{
                  bg: "#FFFFFF",
                  transform: "scale(0.98)",
                }}
              >
                <NavLink to="Leaderboard" activeClassName="active">
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;
                  <HStack>
                    <Image
                      src={leaderboard}
                      alt="search-logo"
                      boxSize="50px"
                      padding="10px"
                      margin="0px 0px 0px 8px"
                    />
                    <Text fontSize="26px" fontWeight="semibold" color="#686B6F">
                      LEADERBOARD
                    </Text>
                  </HStack>
                </NavLink>
              </Box>
              <Box
                as="button"
                w="100%"
                _hover={{ bg: "#E5E5E5" }}
                _active={{
                  bg: "#FFFFFF",
                  transform: "scale(0.98)",
                }}
              >
                <NavLink to="InputQuestion" activeClassName="active">
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;
                  <HStack>
                    <Image
                      src={input}
                      alt="search-logo"
                      boxSize="50px"
                      padding="10px"
                      margin="0px 0px 0px 8px"
                    />
                    <Text fontSize="26px" fontWeight="semibold" color="#686B6F">
                      INPUT QUESTION
                    </Text>
                  </HStack>
                </NavLink>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default LeftDrawer;
