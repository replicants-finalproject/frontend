import React, { useState } from 'react';

function ShipperOpenRoutes() {
  const [openRoutes, setOpenRoutes] = useState([])

  let flaskEndpoint = 'shipper_open_routes'
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
        setOpenRoutes(json_res['Routes'])
      } catch (err) {
        console.log(err)
      }
  }

  let showOpenRoutes = <div></div>
  if (openRoutes.length > 0) {
    // map function to handle data
  } else {
    flask(flaskEndpoint, data)
  }

  return (
      <div>
          <p>OPEN ROUTES</p>
          {showOpenRoutes}
      </div>
  )
}

export default ShipperOpenRoutes;