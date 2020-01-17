import React, { useState } from 'react';

// styling imports
import { Flex, Box, Text, Image, Button } from 'rebass';

// file imports
import '../container/loginhome.css';
import waves from '../images/waves1.png';
import shipperIcon from '../images/shipper1.png';
import nonprofitIcon from '../images/ribbon.png';

function SignUpInfo(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [company, setCompany] = useState('')

    let flaskEndpoint = props.hasChosen

    const data = {
        company: company,
        username: username, 
        password: password
    }

    const boxStyles = {
        height: '310px',
        minWidth: '650px',
        marginTop: '0px',
        padding: '2%',
        textAlign: 'left',
        fontFamily: 'Open Sans',
        backgroundColor: '#eeeeee',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderRadius: '8px',
        borderColor: '#aaaaaa',
        boxShadow: '2px 2px 7px -1px rgb(120, 120, 120)',
    };

    const textStyles = {
        padding: '10px 0px 25px 0px',
        color: 'rgb(0, 68, 170)',
        fontSize: '34px',
        fontWeight: 'bold'
    };

    const flexStyles = {
      width: '350px',
      justifyContent: 'space-between'
    }

    const labelStyles = {
        width: '100px',
        paddingRight: '10px',
        color: '#000000',
        fontFamily: 'Open Sans',
        fontSize: '25px'
    };

    const inputStyles = {
        height: '30px',
        width: '200px',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: '#aaaaaa'
    };

    const imageStyles = {
      height: '160px',
      marginTop: '0px',
      paddingBottom: '0px',
    }

    return(
        <div>
            <Flex sx={{
                  flexWrap: 'row',
                  width: '100%',
                  paddingTop: '10%',
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center'}}>

            <Image src={waves} height='283px' width='50%' />
            
            <Box style={boxStyles}>

                <Flex justifyContent='space-between'>
                  <div>

                  { (props.hasChosen === 'shipper') ? 
                      <Text style={textStyles}>Shipper Sign Up</Text> : 
                      <Text style={textStyles}>Nonprofit Sign Up</Text> }
                    
                    {/* @ALEX -- THIS NEEDS EDITING!! Thanks  */}
                    <label>Company:</label>
                    <input onChange={(e)=>setCompany(String(e.target.value))}></input>

                    <Flex style={flexStyles}>
                        <label style={labelStyles}>Username:</label>
                        <input style={inputStyles} onChange={(e)=>setUsername(String(e.target.value))} />
                    </Flex>
                    <br/>

                    <Flex style={flexStyles}>
                        <label style={labelStyles}>Password:</label>
                        <input style={inputStyles} onChange={(e)=>setPassword(String(e.target.value))} />
                    </Flex>
                    <br/>
                  </div>

                  { (props.hasChosen === 'shipper') ? 
                      <Image src={shipperIcon} style={imageStyles} /> : 
                      <Image src={nonprofitIcon} style={imageStyles} /> }
                  

                </Flex>

                <Flex justifyContent='space-between'>
                    <Button onClick={(e)=>props.flask((flaskEndpoint + "_create_account"), data)}>
                        Create Account</Button>
                </Flex>
            </Box>
            
            <Image src={waves} height='283px' width='50%' />

          </Flex>
        </div>
    )
}

export default SignUpInfo;