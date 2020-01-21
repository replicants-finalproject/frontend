import React, { useState } from 'react';


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

  return (
    <div>
      <p>ShipperNewRoute Page</p>

      <label>Enter route information below: </label>

      <input placeholder='Departure Location' onChange={(e)=>setDepartureLocation(e.target.value)}/>
      <input placeholder='Departure Date' onChange={(e)=>setDepartureDate(e.target.value)}/>
      <input placeholder='Arrival Location' onChange={(e)=>setArrivalLocation(e.target.value)}/>
      <input placeholder='Arrival Date' onChange={(e)=>setArrivalDate(e.target.value)}/>
      <input placeholder='Available Containers' onChange={(e)=>setAvailableContainers(e.target.value)}/>

      <button onClick={(e)=>flask(flaskEndpoint, data)}>Enter Route</button>
      <hr/>
      {success ? <p>Route successfully added!</p> : <p></p>  }

    </div>
  )
};
export default ShipperNewRoute;