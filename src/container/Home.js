import React, { useState } from 'react';

// link and route imports
import ShipperHome from './Shipper/ShipperHome';
import NPHome from './NonProfit/NPHome';


function Home() {
  const [shipper, setShipper] = useState(false)
  
  shipper = sessionStorage.getItem("shipper")

    return ( 
      <div>
        <p>HOME PAGE</p>
        {shipper ? <ShipperHome/> : <NPHome/>}
      </div>
    )
};
export default Home;