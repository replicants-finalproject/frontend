import React from 'react';

// styling imports
import { Flex, Box, Text } from 'rebass';

// Link-Header-Route
import { Link } from 'react-router-dom';

const headerLinkStyles = {
  marginTop: '10px',
  padding: '4px 4px',
  background: '#ffffff',
  color: 'rgb(0, 51, 128)',
  fontFamily: 'Open Sans',
  fontSize: '15px',
  fontWeight: 'bold',
  borderStyle: 'solid',
  borderWidth: '0px',
  borderRadius: '8px',
  textDecoration: 'none'
}


function NPHeader() {
  return (
    <nav>
      <Flex>
        <Link to='/nonprofit/previousroutes' style={headerLinkStyles}>
          Previous Routes</Link>

        <Box width='20px' />

        <Link to='/nonprofit/newroute' style={headerLinkStyles}>
          New Routes</Link>

        <Box width='20px' />

        <Link style={headerLinkStyles}>
          Logout</Link>

      </Flex>
    </nav>
  )
};
export default NPHeader;