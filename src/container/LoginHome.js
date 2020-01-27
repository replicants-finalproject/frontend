import React, { useState } from 'react';

// styling imports
import { Flex, Box, Text, Image } from 'rebass';

// component import
import LoginInfo from '../components/LoginInfo'

// file imports
import './loginhome.css';
import waves from '../images/waves1.png';
import shipperIcon from '../images/shipper1.png';
import nonprofitIcon from '../images/ribbon.png';


function LoginHome(props) {

    const [hasChosen, setHasChosen] = useState('')

    const containerStyles = { 
          flexWrap: 'row',
          width: '100%',
          paddingTop: '10%',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center'
    };

    const boxStyles = {
          height: '310px',
          minWidth: '300px',
          marginTop: '0px',
          backgroundColor: '#eeefff',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderRadius: '6px',
          borderColor: '#aaaaaa',
          boxShadow: '2px 2px 3px -1px rgb(120, 120, 120)',
    };

    const imageStyles = {
          height: '200px',
          marginTop: '30px'
    }
  
    const textStyles = {
          padding: '10px 0px',
          color: 'rgb(0, 68, 170)',
          fontFamily: 'Open Sans',
          fontSize: '34px',
          fontWeight: 'bold'
    };

    return ( 
      <div>

        { hasChosen ? <LoginInfo hasChosen={hasChosen} setID={props.setID} /> :

          <Flex style={containerStyles}>

            <Image src={waves} height='283px' width='50%' />

            <Box className='box-button' style={boxStyles}
                  onClick={(e)=>setHasChosen('shipper')}>
              <Image src={shipperIcon} style={imageStyles} />
              <Text style={textStyles}>Shipper</Text>
            </Box>

            <Box minWidth='50px' />

            <Box className='box-button' style={boxStyles}
                  onClick={(e)=>setHasChosen('np')}>
              <Image src={nonprofitIcon} style={imageStyles} />
              <Text style={textStyles}>Nonprofit</Text>
            </Box>

            <Image src={waves} height='283px' width='50%' />

          </Flex>
        }
      </div>
    )
};
export default LoginHome;