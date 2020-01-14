import React from 'react';

// Link-Header-Route
import { Route } from 'react-router-dom';
import Home from '../container/Home';
import NPLogin from '../container/NonProfit/NPLogin';
import ShipperLogin from '../container/Shipper/ShipperLogin';


function Router() {
  return (
    <div>
        <Route path="/home" component={Home}/>
        <Route path="/npLogin" component={NPLogin}/>
        <Route path="/shipperLogin" component={ShipperLogin}/>
    </div>
  )
};
export default Router;