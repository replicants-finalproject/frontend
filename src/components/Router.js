import React from 'react';

// Link-Header-Route
import { Route } from 'react-router-dom';
import Home from '../container/Home';



function Router() {
  return (
    <div>
        <Route path="/home" component={Home}/>
    </div>
  )
};
export default Router;