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


  function logout() {
    sessionStorage.setItem('id', '')
  }

  return (
    <nav>
      <Flex>
        <Link to='/nonprofit/previousroutes' style={headerLinkStyles}>
          Previous Routes</Link>

        <Box width='20px' />

        <Link to='/nonprofit/newroute' style={headerLinkStyles}>
<<<<<<< HEAD
          New Route</Link>
=======
          New Routes</Link>
>>>>>>> 7b87a82b042c06081cd30e5e9fb9cffd3ef501d9

        <Box width='20px' />

        <Link onClick={(e)=>logout()} style={headerLinkStyles}>
          Logout</Link>
      </Flex>
    </nav>
  )
};
export default NPHeader;