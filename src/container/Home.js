import React from 'react';

// styling imports
import { Flex, Box, Text, Image } from 'rebass';
import './home.css';

// Link-Header-Route imports
import { Link } from 'react-router-dom';

// file imports
import waves from '../images/waves1.png';
import boxes from '../images/boxes1.png';


function Home() {

    const boxStyles = {
        width: '300px',
        height: '300px',
        marginTop: '0px',
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '8px',
        borderColor: '#bbbbbb',
        boxShadow: '2px 2px 7px -3px rgb(120, 120, 120)',
    };
  
    const textStyles = {
        paddingTop: '200px',
        color: '#212450',
        fontSize: '35px',
        fontWeight: 'bold'
    };

    return ( 

          <Flex sx={{
              flexWrap: 'row',
              width: '100%',
              paddingTop: '10%',
              backgroundColor: '#ffffff',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center'}}>

            <Box className='waves' height='263px' width='50%' />
            
            <Link to='/shipperLogin' style={{ textDecoration: 'none' }}>
              <Box style={boxStyles}>
                <Text style={textStyles}>Shipper Login</Text>
              </Box>
            </Link>

            <Box minWidth='50px' />

            <Link to='/npLogin' style={{ textDecoration: 'none' }}>
              <Box style={boxStyles}>
                <Text style={textStyles}>Nonprofit Login</Text>
              </Box>
            </Link>

            <Box className='waves' height='263px' width='50%' />

          </Flex>
    )
};
export default Home;