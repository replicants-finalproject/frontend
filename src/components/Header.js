import React from 'react';

// styling imports
import { Flex, Box, Text } from 'rebass';


function Header() {

  return (
        <Flex sx={{
                height: '70px',
                paddingTop: '12px',
                bg: 'rgb(0, 51, 128)',
                color: '#ffffff',
                fontFamily: 'Open Sans',
                fontSize: '35px',
                fontWeight: 'bold',
                }}>
            
            <Box mx='auto' textAlign='right'/>

            <Box width='1000px' textAlign='center'>
                <Text>Ship For Charity</Text>
            </Box>

            <Box mx='auto' textAlign='right'/>
        </Flex>
  )
};
export default Header;