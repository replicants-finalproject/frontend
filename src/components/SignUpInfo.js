import React, { useState } from 'react';

// styling imports
import { Flex, Box, Text, Image, Button } from 'rebass';

// file imports
import '../container/loginhome.css';
import waves from '../images/waves1.png';
import shipperIcon from '../images/shipper1.png';
import nonprofitIcon from '../images/ribbon.png';

function SignUpInfo(props) {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [company, setCompany] = useState(null);

    let flaskEndpoint = props.hasChosen

    const data = {
        company: company,
        username: username, 
        password: password
    };

    // Search button works with keyboard ENTER or RETURN
    const onFormSubmit = e => {
        e.preventDefault();
        if (username && password && company) {
            props.flask((flaskEndpoint + "_create_account"), data);
        };
    };

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
        minWidth: '650px',
        marginTop: '0px',
        padding: '1% 2%',
        textAlign: 'left',
        fontFamily: 'Work Sans',
        backgroundColor: '#eeeeee',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderRadius: '6px',
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
        fontFamily: 'Work Sans',
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
      marginTop: '30px',
      paddingBottom: '0px',
    }

    return(
        <Flex style={containerStyles}>

        <Image src={waves} height='283px' width='50%' />

        <Box style={boxStyles}>
          <form onSubmit={e => onFormSubmit(e)}>
            <Flex justifyContent='space-between'>
                <div>
                    { (props.hasChosen === 'shipper') ? 
                        <Text style={textStyles}>Shipper Sign Up</Text> : 
                        <Text style={textStyles}>Nonprofit Sign Up</Text> }
                    
                    <Flex style={flexStyles}>
                        <label style={labelStyles}>Company:</label>
                        <input style={inputStyles} 
                                onChange={(e)=>setCompany(String(e.target.value))} />
                    </Flex>
                    <br/>

                    <Flex style={flexStyles}>
                        <label style={labelStyles}>Username:</label>
                        <input style={inputStyles} 
                                onChange={(e)=>setUsername(String(e.target.value))} />
                    </Flex>
                    <br/>

                    <Flex style={flexStyles}>
                        <label style={labelStyles}>Password:</label>
                        <input type="password" style={inputStyles} 
                                onChange={(e)=>setPassword(String(e.target.value))} />
                    </Flex>
                    <br/>

                    <Flex justifyContent='right'>
                        <Button type='submit'>Create Account</Button>
                    </Flex>
                </div>

                { (props.hasChosen === 'shipper') ? 
                    <Image src={shipperIcon} style={imageStyles} /> : 
                    <Image src={nonprofitIcon} style={imageStyles} /> }
            </Flex>
          </form>
        </Box>
        
        <Image src={waves} height='283px' width='50%' />

        </Flex>
    )
}

export default SignUpInfo;
