import React, { useState, useEffect } from 'react';

// link and route imports
import ShipperHome from './Shipper/ShipperHome';
import NPHome from './NonProfit/NPHome';


function Home() {

  let userType = sessionStorage.getItem('user_type')

  // let homePage;
  // if (userType === 'shipper') {
  //   homePage = <ShipperHome/>
  // } else {
  //   homePage = <NPHome/>
  // }


    return ( 
      <div>
        { (userType === 'shipper') ? <ShipperHome/> : <NPHome/> }
      </div>
    )
};
export default Home;