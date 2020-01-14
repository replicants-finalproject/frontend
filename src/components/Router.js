import React from 'react';

// Link-Header-Route
import { Route } from 'react-router-dom';
import Home from '../container/Home';


function Router() {
  return (
    <div>
        {/* routes for Header component */}
        <Route path="/container/Home" component={Home}/><p>Router Page</p>
    </div>
  )
};
export default Router;