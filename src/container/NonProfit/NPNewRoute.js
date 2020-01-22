import React, { useState } from 'react';


function NPNewRoute() {
  const [departureLocation, setDepartureLocation] = useState('');
  const [arrivalLocation, setArrivalLocation] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');

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


  return (
    <div>
      <p>NP New Route Page</p>
      <label>Enter route below: </label>
      <input placeholder='Departure Location' onClick={(e)=>setDepartureLocation(e.target.value)}/>
      <input placeholder='Arrival Location' onClick={(e)=>setArrivalLocation(e.target.value)}/>
      <input placeholder='Arrival Date' onClick={(e)=>setArrivalDate(e.target.value)}/>
      <button onClick={(e)=>flask(flaskEndpoint, data)} >Search Routes</button>
    </div>
  )
};
export default NPNewRoute;