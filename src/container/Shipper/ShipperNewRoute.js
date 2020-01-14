import React from 'react';


function ShipperNewRoute() {
  return (
    <div>
      <p>ShipperNewRoute Page</p>
      <label>Enter route information below: </label>
      <input key={'starting_location'}>Departure Location</input>
      <input key={'departure_date'}>Departure Date</input>
      <p>to</p>
      <input key={'ending_location'}>Arrival Location</input>
      <input key={'arrival_date'}>Arrival Date</input>
      <input key={'containers'}># Containers</input>
      <button>Enter Route</button>
    </div>
  )
};
export default ShipperNewRoute;