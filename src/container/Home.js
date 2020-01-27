import React, { useState, useEffect } from 'react';

// link and route imports
import ShipperHome from './Shipper/ShipperHome';
import NPHome from './NonProfit/NPHome';


function Home() {

  let userType = sessionStorage.getItem('user_type')

    return ( 
      <div>
        { (userType === 'shipper') ? <ShipperHome/> : <NPHome/> }
      </div>
    )
};
export default Home;