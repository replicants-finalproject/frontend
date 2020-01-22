import React from 'react';

// Link-Header-Route
import { Route } from 'react-router-dom';

// route components
import Home from '../container/Home';

import ShipperPrevRoutes from '../container/Shipper/ShipperPrevRoutes';
import ShipperNewRoute from '../container/Shipper/ShipperNewRoute';
import ShipperOpenRoutes from '../container/Shipper/ShipperOpenRoutes';

import NPPrevRoutes from '../container/NonProfit/NPPrevRoutes';
import NPNewRoute from '../container/NonProfit/NPNewRoute';


function Router() {
  return (
    <div>
        <Route path="/home" component={Home}/>

        <Route path="/shipper/previousroutes" component={ShipperPrevRoutes}/>
        <Route path="/shipper/newroute" component={ShipperNewRoute}/>
        <Route path="/shipper/openroutes" component={ShipperOpenRoutes}/>

        <Route path="/nonprofit/previousroutes" component={NPPrevRoutes}/>
        <Route path="/nonprofit/newroute" component={NPNewRoute}/>
    </div>
  )
};
export default Router;