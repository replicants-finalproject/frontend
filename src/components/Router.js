import React from 'react';

// Link-Header-Route
import { Route } from 'react-router-dom';

// route components
import Home from '../container/Home';

import ShipperPrevRoutes from '../container/Shipper/ShipperPrevRoutes';
import ShipperNewRoutes from '../container/Shipper/ShipperNewRoutes';
import ShipperOpenRoutes from '../container/Shipper/ShipperOpenRoutes';

import NPPrevRoutes from '../container/NonProfit/NPPrevRoutes';
import NPNewRoutes from '../container/NonProfit/NPNewRoutes'


function Router() {
  return (
    <div>
        <Route path="/home" component={Home}/>

        <Route path="/shipper/previousroutes" component={ShipperPrevRoutes}/>
        <Route path="/shipper/newroutes" component={ShipperNewRoutes}/>
        <Route path="/shipper/openroutes" component={ShipperOpenRoutes}/>

        <Route path="/nonprofit/previousroutes" component={NPPrevRoutes}/>
        <Route path="/nonprofit/newroutes" component={NPNewRoutes}/>
    </div>
  )
};
export default Router;