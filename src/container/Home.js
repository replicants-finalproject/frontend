import React from 'react';

// styling imports
import { Flex, Box, Text } from 'rebass';

// Link-Header-Route imports
import { Link } from 'react-router-dom';


function Home() {

  const styles = {
    width: '300px',
    height: '300px',
    color: '#212450',
    fontSize: '35px',
    fontWeight: 'bold',
    textDecoration: 'none',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '8px',
    borderColor: '#bbbbbb',
    boxShadow: '2px 2px 7px -3px rgb(120, 120, 120)'
  };

  return (
    <Flex justifyContent='center'>
      <Flex sx={{
            width: '1000px',
            paddingTop: '10%',
            paddingLeft: '5%',
            paddingRight: '5%',
            bg: '#ffffff',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center'
            }}>

            <Box mx='auto' />

            <Box style={styles}>
              Shipper Login
            </Box>

            <Box width='50px' />

            <Box style={styles}>
              Nonprofit Login
            </Box>

            <Box mx='auto' />

      </Flex>
    </Flex>
  )
};
export default Home;