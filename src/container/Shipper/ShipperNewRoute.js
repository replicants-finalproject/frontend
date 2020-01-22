import React, { useState } from 'react';

// styling
import { Flex, Box, Text, Image, Button } from 'rebass';


function ShipperNewRoute() {
  const [departureLocation, setDepartureLocation] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalLocation, setArrivalLocation] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [availableContainers, setAvailableContainers] = useState('');
  const [success, setSuccess] = useState(false)
  
  let flaskEndpoint = (sessionStorage.getItem('user_type')) + '_new_route';
  
  let shipperAccountID = sessionStorage.getItem('id')

  let data = {
    shipperAccountID: shipperAccountID,
    departureLocation: departureLocation,
    departureDate: departureDate,
    arrivalLocation: arrivalLocation,
    arrivalDate: arrivalDate,
    availableContainers: availableContainers,
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
      if (json_res['SQL'] === "Success") {
        setSuccess(true)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const boxStyles = {
      minWidth: '650px',
      marginTop: '0px',
      padding: '1% 2%',
      textAlign: 'left',
      fontFamily: 'Open Sans',
      backgroundColor: '#eeefff',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderRadius: '8px',
      borderColor: '#aaaaaa',
      boxShadow: '2px 2px 7px -1px rgb(120, 120, 120)',
  };

  const textStyles = {
      padding: '0px 0px 25px 0px',
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
      padding: '0px 0px 0px 10px',
      color: '#000000',
      fontFamily: 'Open Sans',
      fontSize: '25px'
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
    <Flex sx={{ flexWrap: 'row',
                width: '100%',
                paddingTop: '10%',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center'}}>

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
            </label><br/>
            <label style={labelStyles} fontWeight='bold'>
              Departure Date
            </label>
          </Box>
          <Box>
            <input style={inputStyles} placeholder='Location' 
                    onChange={(e)=>setDepartureLocation(e.target.value)}/>
            <br/>
            <input style={inputStyles} placeholder='Date' 
                    onChange={(e)=>setDepartureDate(e.target.value)}/>
          </Box>
        </Flex>

        <Flex width='100%'>
          <Box width={1/2}>
            <label style={labelStyles} fontWeight='bold'>
              Arrival Location
            </label><br/>
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

        <Flex width='100%'>
          <Box width={1/3}>
            <label style={labelStyles} fontWeight='bold'>
              Availability
            </label>
          </Box>
          <Box>
            <input style={inputStyles} placeholder='Available Containers' 
                onChange={(e)=>setAvailableContainers(e.target.value)}/>
          </Box>
        </Flex>

        <Button onClick={(e)=>flask(flaskEndpoint, data)}>Enter Route</Button>
        <br/>
        {success ? <p>Route successfully added!</p> : <p></p>  }
      </Box>
    </Flex>
  )
};
export default ShipperNewRoute;