import React, { useState } from 'react';
import { Flex, Box, Text } from 'rebass';


function ShipperPrevRoutes() {
  const [previousRoutes, setPreviousRoutes] = useState([])

  let flaskEndpoint = 'shipper_previous_routes'
  let shipperAccountID = sessionStorage.getItem('id')
  let data = {shipperAccountID: shipperAccountID}

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
        setPreviousRoutes(json_res['Routes'])
      } catch (err) {
        console.log(err)
      }
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
      textAlign: 'left',
      fontFamily: 'Work Sans',
      backgroundColor: '#eeefff',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderRadius: '6px',
      borderColor: '#aaaaaa',
      boxShadow: '2px 2px 7px -1px rgb(120, 120, 120)',
      justifyContent: 'center',
      alignItems: 'center'
  };

  const textStyles = {
      padding: '35px 0px 0px 0px',
      color: 'rgb(0, 68, 170)',
      fontSize: '34px',
      fontWeight: 'bold'
  };

  const gridStyles = {
    width: '80%',
    margin: '20px auto',
    // padding: '10px',
    backgroundColor: '#ffffff',
    color: '#000000',
    fontSize: '15px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '2px'
  };

  const labelStyles = {
      color: '#000000',
      fontSize: '21px'
  };

  const cellStyles = {
    color: '#000000',
    paddingLeft: '3px',
    fontSize: '15px',
    borderStyle: 'solid',
    borderWidth: '0px 1px 1px 1px',
  };

  let openRoutes = <div></div>;
  if (previousRoutes.length > 0) {
    console.log("Previous Routes")
    console.log(previousRoutes)
    openRoutes = previousRoutes.map((data) => (
      <Box style={gridStyles}>

        <div style={labelStyles}><p> Shipper ID: {data[1]}</p></div>
        <br/>
        <Flex><div style={cellStyles}><p> DepartureLocation:</p></div><div style={cellStyles}><p>{ data[2] }</p></div></Flex>
        <br/>
        <Flex><div style={cellStyles}><p> DepartureDate:</p></div> <div style={cellStyles}><p>{ data[3] }</p></div></Flex>
        <br/>
        <Flex><div style={cellStyles}><p> ArrivalLocation:</p></div> <div style={cellStyles}><p>{ data[4] }</p></div></Flex>
        <br/>
        {/* <p> DepartureDate: {data[3]} </p>
        <p> ArrivalLocation: {data[4]} </p>
        <p> ArrivalDate: {data[5]} </p>
        <p> TotalContainers: {data[6]} </p>
        <p> AvailableContainers: {data[7]} </p> */}
        <br/>
      </Box>
    ))
  } else {
    flask(flaskEndpoint, data)
  }


  return (
    <Flex style={containerStyles}>
      <div style={boxStyles}>
        <Box textAlign='center'>
          <Text style={textStyles}>Previously Existing Routes</Text>
        </Box><br/>

        <div>{ openRoutes }</div>

      </div>
    </Flex>    
  )
};
export default ShipperPrevRoutes;