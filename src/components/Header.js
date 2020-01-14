import React from 'react';

// styling imports
import { Flex, Box, Text } from 'rebass';


function Header() {
  return (
        <Flex sx={{
                bg: 'navy',
                textAlign: 'center',
                height: '50px',
                color: '#ffffff'}}>

            <Box mx='auto' />

            <Box width={1/3}>
                <Text>Charity Shipper</Text>
            </Box>

            <Box mx='auto' />
        </Flex>
  )
};
export default Header;