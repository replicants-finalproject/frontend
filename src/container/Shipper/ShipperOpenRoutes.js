import React from 'react';

function ShipperOpenRoutes() {
    let flaskEndpoint = 'shipper_open_routes'
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
          // if (json_res) {
    
          // }
        } catch (err) {
          console.log(err)
        }
    }

    let response = flask(flaskEndpoint, data)

    return (
        <div>
            <p>OPEN ROUTES</p>
        </div>
    )
}

export default ShipperOpenRoutes;