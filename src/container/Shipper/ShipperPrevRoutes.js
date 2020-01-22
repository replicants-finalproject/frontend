import React, { useState } from 'react';
import {Flex} from 'rebass';


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

  if (previousRoutes.length > 0) {
    console.log("Previous Routes")
    console.log(previousRoutes)
    let openRoutes = previousRoutes.map((data, idx) => (
      <Flex key={idx}>
        <p> Shipper ID: {data[1]} </p>
        <p> DepartureLocation: {data[2]} </p>
        <p> DepartureDate: {data[3]} </p>
        <p> ArrivalLocation: {data[4]} </p>
        <p> ArrivalDate: {data[5]} </p>
        <p> TotalContainers: {data[6]} </p>
        <p> AvailableContainers: {data[7]} </p>
      </Flex>
    ))
  } else {
    flask(flaskEndpoint, data)
  }


  return (
    <div>
      <p>PREVIOUS ROUTES</p>
      {/* <p>{ openRoutes }</p> */}
    </div>
  )
};
export default ShipperPrevRoutes;