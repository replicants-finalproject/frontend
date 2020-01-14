import React from 'react';

// Link-Header-Route
import { Route } from 'react-router-dom';
import Home from '../container/Home';
import NPLogin from '../container/NonProfit/NPLogin';
import ShipperLogin from '../container/Shipper/ShipperLogin';


function Router() {
  return (
    <div>
        <Route path="../container/Home" component={Home}/>
        <Route path="../container/NonProfit/NPLogin" component={NPLogin}/>
        <Route path="../container/Shipper/ShipperLogin" component={ShipperLogin}/>
    </div>
  )
};
export default Router;