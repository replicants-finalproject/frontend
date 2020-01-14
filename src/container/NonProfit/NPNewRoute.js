import React from 'react';


function NPNewRoute() {

  return (
    <div>
      <p>NPNewRoute Page</p>
      <label>Enter route below: </label>
      <input key={'starting_location'}>Enter location</input>
      <p>to</p>
      <input key={'ending_location'}>Enter Location</input>
      <button>Search Routes</button>
    </div>
  )
};
export default NPNewRoute;