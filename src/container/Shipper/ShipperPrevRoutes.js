import React from 'react';
import {Flex} from 'rebass';


function ShipperPrevRoutes() {

  let flaskEndpoint = 'shipper_previous_routes'
  let shipperAccountID = sessionStorage.getItem('id')
  let data = {
      shipperAccountID: shipperAccountID
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
        return json_res['Routes']
      } catch (err) {
        console.log(err)
      }
  }

  let response
  if (response) {
    const openRoutes = response.map((shipperAccountID, departureLocation, departureDate, arrivalLocation, arrivalDate, totalContainers, availableContainers) => (
      <Flex>
        <p> {shipperAccountID} </p>
        <p> {departureLocation} </p>
        <p> {departureDate} </p>
        <p> {arrivalLocation} </p>
        <p> {arrivalDate} </p>
        <p> {totalContainers} </p>
        <p> {availableContainers} </p>
        <button>Select Route</button>
      </Flex>
    ))
  } else {
    let response = flask(flaskEndpoint, data)
  }


  console.log(response)

  // const openRoutes = response.map((shipperAccountID, departureLocation, departureDate, arrivalLocation, arrivalDate, totalContainers, availableContainers) => (
  //   <Flex>
  //     <p> {shipperAccountID} </p>
  //     <p> {departureLocation} </p>
  //     <p> {departureDate} </p>
  //     <p> {arrivalLocation} </p>
  //     <p> {arrivalDate} </p>
  //     <p> {totalContainers} </p>
  //     <p> {availableContainers} </p>
  //     <button>Select Route</button>
  //   </Flex>
  // ))

  return (
    <div>
      <p>PREVIOUS ROUTES</p>
    </div>
  )
};
export default ShipperPrevRoutes;