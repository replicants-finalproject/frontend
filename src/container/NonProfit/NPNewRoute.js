import React, { useState } from 'react';

// styling
import { Flex, Box, Text, Button } from 'rebass';


function NPNewRoute() {
  const [departureLocation, setDepartureLocation] = useState('');
  const [arrivalLocation, setArrivalLocation] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [openRoutes, setOpenRoutes] = useState([]);
  const [routeID, setRouteID] = useState('');
  const [containers, setContainers] = useState('');

  let searchFlaskEndpoint = 'np_search_routes';
  let searchData = {
    departureLocation: departureLocation,
    arrivalLocation: arrivalLocation,
    arrivalDate: arrivalDate
  }

  let saveFlaskEndpoint = "np_new_route";
  let npAccountID = sessionStorage.getItem('id')
  let saveData = {
    npAccountID : npAccountID,
    routeID : routeID,
    containers : containers
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
      console.log("Json_res")
      console.log(json_res)
      setOpenRoutes(json_res["Non-profit Open routes"])
    } catch (err) {
      console.log(err)
    }
  }

  function saveAndSend(id, flaskEndpoint, data) {
    setRouteID(id)
    console.log('data')
    console.log(data)
    flask(flaskEndpoint, data)
  }

  

  const containerStyles = { 
    flexWrap: 'row',
    width: '100%',
    paddingTop: '3%',
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

  const label2Styles = {
    width: '130px',
    color: '#ffffff',
    fontFamily: 'Work Sans',
    fontSize: '21px'
};

  const gridStyles = {
    width: '500px',
    margin: '20px auto',
    paddingTop: '10px',
    backgroundColor: 'rgb(0, 51, 128)',
    fontSize: '15px',
    borderStyle: 'solid',
    borderWidth: '0px',
    borderRadius: '4px',
    boxShadow: '1px 1px 7px -2px rgb(0, 51, 128)',
  };

  const columnStyles = {
      width: '50%',
      margin: '0px',
      padding: '0px',
      borderStyle: 'solid',
      borderColor: '#0000000',
      borderWidth: '0px 1px 0px 1px',
  };

  const cellStyles = {
      width: '100%',
      height: '30px',
      paddingLeft: '3px',
      backgroundColor: '#ffffff',
      color: '#000000',
      fontSize: '16px',
      borderStyle: 'solid',
      borderWidth: '0px 0px 1px 0px',
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

  let showOpenRoutes = <div></div>;
  if (openRoutes.length > 0) {
    console.log("Open Routes")
    console.log(openRoutes)
    showOpenRoutes = openRoutes.map((data) => (
      <Box style={gridStyles}>

        <Flex justifyContent='space-evenly'>
          <div style={label2Styles}><p> Shipper ID: {data[1]}</p></div>
          <input style={inputStyles} placeholder='Number of Containers' onChange={(e)=>setContainers(e.target.value)}/>
          <Button onClick={(e)=>saveAndSend(data[0], saveFlaskEndpoint, saveData)}>Select Route</Button>
        </Flex>
        <br/>

        <Flex>
          <Box style={columnStyles}>
            <div style={cellStyles}><p>Departure Location</p></div>
            <div style={cellStyles}><p>Departure Date</p></div>
            <div style={cellStyles}><p>Arrival Location</p></div>
            <div style={cellStyles}><p>Arrival Date</p></div>
            <div style={cellStyles}><p>Total Containers</p></div>
            <div style={cellStyles}><p>Available Containers</p></div>
          </Box>

          <Box style={columnStyles}>
            <div style={cellStyles}><p>{ data[2] }</p></div>
            <div style={cellStyles}><p>{ data[3] }</p></div>
            <div style={cellStyles}><p>{ data[4] }</p></div>
            <div style={cellStyles}><p>{ data[5] }</p></div>
            <div style={cellStyles}><p>{ data[6] }</p></div>
            <div style={cellStyles}><p>{ data[7] }</p></div>
          </Box>
        </Flex>

        <br/>
      </Box>
    ))
  };


  return (
    <div>
      <Flex style={containerStyles}>
        <Box style={boxStyles}>
          <Box textAlign='center'>
            <Text style={textStyles}>Search New Route</Text>
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
                Arrive By Date
              </label>
            </Box>
            <Box>    
              <input style={inputStyles} placeholder='Location' 
                      onChange={(e)=>setArrivalLocation(e.target.value)}/>
              <br/>
              <input style={inputStyles} placeholder='MM/DD/YY' 
                      onChange={(e)=>setArrivalDate(e.target.value)}/>
            </Box>
          </Flex>

          <Button onClick={(e)=>flask(searchFlaskEndpoint, searchData)}>Search Routes</Button>
          <br/>
          <br/>
        </Box>
      </Flex>
      
    <Flex style={containerStyles}>
        <Box style={boxStyles}>
            {showOpenRoutes}
        </Box>
    </Flex>

    </div>
  )
};
export default NPNewRoute;