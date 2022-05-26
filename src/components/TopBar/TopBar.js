import play from '../../images/play-button-arrowhead.png';
import search from '../../images/search.png';
import input from '../../images/pencil.png';
import folder from '../../images/folder-grey.png';
import leaderboard from '../../images/bar-chart-grey.png';
import nuslogo from '../../images/nus-logo.png';
import menu from '../../images/menu.png';
import { 
    Box, 
    Menu,
    MenuButton,
    IconButton,
    MenuList,
    MenuItem,
    Text,
    Image,
  } from '@chakra-ui/react';
import LeftDrawer from '../LeftDrawer';

  function TopBar(){
      return (
    <div className = "top-bar">
    <LeftDrawer />
        {/*
        <Menu>
            <MenuButton isDisabled
              as={IconButton}
              aria-label='Options'
              variant='ghost'
              icon={
                <Box>
                  <Image src={menu} alt='menu-logo' boxSize='3em'/>
                </Box>
              }
              boxSize='5.9em'
              borderWidth='0px'
              _hover={{ bg: '#63B7AE' }}
              _active={{
                bg: '#83C5BE',
                transform: 'scale(0.98)',
              }}
            />
            
            <MenuList>
              <MenuItem>
                <Box>
                  <Image src={search} alt='search-logo' boxSize='50px' padding='10px'/>
                </Box>
                <Text fontSize='32px' fontWeight='semibold' color='#686B6F'>
                  MODULE SEARCH
                </Text>
              </MenuItem>
              <MenuItem>
                <Box>
                  <Image src={play} alt='play-logo' boxSize='50px' padding='10px'/>
                </Box>
                <Text fontSize='32px' fontWeight='semibold' color='#686B6F'>
                  DAILY NUDLES
                </Text>
              </MenuItem>
              <MenuItem>
                <Box>
                  <Image src={folder} alt='search-logo' boxSize='50px' padding='10px'/>
                </Box>
                <Text fontSize='32px' fontWeight='semibold' color='#686B6F'>
                  RESOURCE LIBRARY
                </Text>
              </MenuItem>
              <MenuItem>
                <Box>
                  <Image src={leaderboard} alt='leaderboard-logo' boxSize='50px' padding='10px'/>
                </Box>
                <Text fontSize='32px' fontWeight='semibold' color='#686B6F'>
                  LEADERBOARD
                </Text>
              </MenuItem>
              <MenuItem isDisabled='true'>
              <Box>
                <Image src={input} alt='input-logo' boxSize='50px' padding='10px'/>
              </Box>
                <Text fontSize='32px' fontWeight='semibold' color='#686B6F'>
                  INPUT QUESTIONS
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>
          */}
        <img src={nuslogo} className ="nus-logo" alt="logo" />
      </div>

      )
  }
  export default TopBar;