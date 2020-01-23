import React, { useState } from 'react';

// styling
import { Flex, Box, Text, Button } from 'rebass';


function NPNewRoute() {
  const [departureLocation, setDepartureLocation] = useState('');
  const [arrivalLocation, setArrivalLocation] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [openRoutes, setOpenRoutes] = useState([]);

  let flaskEndpoint = (sessionStorage.getItem('user_type')) + '_new_route';
  let data = {
    departureLocation: departureLocation,
    arrivalLocation: arrivalLocation,
    arrivalDate: arrivalDate
  }

  async function flask(flaskEndpoint, data) {
    try {
      const endpoint = `http://localhost:5000/api/${flaskEndpoint}`
      const configs = {
        method: 'POST',
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {'Content-type' : 'application/json'}
      }
      const res = await fetch(endpoint, configs);
      const json_res = await res.json();
    } catch (err) {
      console.log(err)
    }
  }

  let showOpenRoutes = <div></div>;
  if (openRoutes.length > 0) {
    console.log("Open Routes")
    console.log(openRoutes)
    showOpenRoutes = openRoutes.map((data, idx) => (
      <Flex key={idx}>
      </Flex>
    ))
  } else {
    flask(flaskEndpoint, data)
  }
  
  const containerStyles = { 
    flexWrap: 'row',
    width: '100%',
    paddingTop: '5%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const boxStyles = {
      minWidth: '600px',
      marginTop: '0px',
      padding: '1% 50px',
      textAlign: 'left',
      fontFamily: 'Work Sans',
      backgroundColor: '#eeefff',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderRadius: '6px',
      borderColor: '#aaaaaa',
      boxShadow: '2px 2px 7px -1px rgb(120, 120, 120)'
  };

  const textStyles = {
      padding: '0px 0px 5px 0px',
      color: 'rgb(0, 68, 170)',
      fontSize: '34px',
      fontWeight: 'bold'
  };

  const labelStyles = {
      width: '100px',
      color: '#000000',
      fontFamily: 'Work Sans',
      fontSize: '21px'
  };

  const inputStyles = {
      height: '35px',
      width: '200px',
      margin: '5px',
      paddingLeft: '10px',
      fontSize: '17px',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: '#aaaaaa'
  };

  return (
    <Flex style={containerStyles}>
      <Box style={boxStyles}>
        <Box textAlign='center'>
          <Text style={textStyles}>Create New Route</Text>
        </Box><br/>

        <label style={labelStyles} fontWeight='bold'>
          Enter route information below: 
        </label><br/><br/>

        <Flex width='100%'>
          <Box width={1/2}>
            <label style={labelStyles} fontWeight='bold'>
              Departure Location
            </label><br/><br/>
          </Box>
          <Box>
            <input style={inputStyles} placeholder='Location' 
                    onChange={(e)=>setDepartureLocation(e.target.value)}/>
            <br/>
          </Box>
        </Flex>

        <Flex width='100%'>
          <Box width={1/2}>
            <label style={labelStyles} fontWeight='bold'>
              Arrival Location
            </label><br/><br/>
            <label style={labelStyles} fontWeight='bold'>
              Arrival Date
            </label>
          </Box>
          <Box>    
            <input style={inputStyles} placeholder='Location' 
                    onChange={(e)=>setArrivalLocation(e.target.value)}/>
            <br/>
            <input style={inputStyles} placeholder='Date' 
                    onChange={(e)=>setArrivalDate(e.target.value)}/>
          </Box>
        </Flex>

        <Button onClick={(e)=>flask(flaskEndpoint, data)}>Enter Route</Button>
        <br/>
        <br/>
      </Box>
    </Flex>
  )
};
export default NPNewRoute;