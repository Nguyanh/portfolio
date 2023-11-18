import { Box, Text } from "@chakra-ui/react";

function NavBar(){
    return (
        <Box className='nav'>
            <a>ABOUT</a>
            <Text>EXPERIENCE</Text>
            <Text>PROJECTS</Text>
        </Box>
    );
};

export default NavBar;