import React, { useState } from 'react';

// styling imports
import { Flex, Box, Text, Image } from 'rebass';

// component import
import LoginInfo from '../components/LoginInfo'

// file imports
import './loginhome.css';
import shipperIcon from '../images/shipper1.png';
import nonprofitIcon from '../images/ribbon.png';


function LoginHome(props) {

    const [hasChosen, setHasChosen] = useState('')

    const boxStyles = {
          minWidth: '300px',
          minWeight: '300px',
          marginTop: '0px',
          backgroundColor: '#eeeeee',
          borderStyle: 'solid',
          borderWidth: '2px',
          borderRadius: '8px',
          borderColor: '#dddddd',
          boxShadow: '2px 2px 7px -1px rgb(120, 120, 120)',
    };

    const imageStyles = {
          height: '200px',
          marginTop: '30px'
    }
  
    const textStyles = {
          padding: '10px 0px',
          color: 'rgb(0, 68, 170)',
          fontSize: '35px',
          fontWeight: 'bold'
    };

    return ( 
      <div>

        { hasChosen ? <LoginInfo hasChosen={hasChosen} setID={props.setID} /> :

          <Flex sx={{
              flexWrap: 'row',
              width: '100%',
              paddingTop: '10%',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center'}}>

            <Box className='waves' height='263px' width='50%' />
            
            <Box className='box-button' style={boxStyles} 
                  onClick={(e)=>setHasChosen('shipper')}>
              <Image src={shipperIcon} style={imageStyles} />
              <Text style={textStyles}>Shipper Login</Text>
            </Box>

            <Box minWidth='50px' />

            <Box className='box-button' style={boxStyles}
                  onClick={(e)=>setHasChosen('np')}>
              <Image src={nonprofitIcon} style={imageStyles} />
              <Text style={textStyles}>Nonprofit Login</Text>
            </Box>

            <Box className='waves' height='263px' width='50%' />

          </Flex>
        }
      </div>
    )
};
export default LoginHome;