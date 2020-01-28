import React, { useState, useEffect } from 'react';

// styling imports
import { ThemeProvider } from 'emotion-theming';
import theme from '@rebass/preset';
import './App.css';

// Link-Header-Route imports
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Router from  './components/Router';


// component and page imports
import Home from './container/Home';
import LoginHome from './container/LoginHome';
import ShipperHome from './container/Shipper/ShipperHome';
import NPHome from './container/NonProfit/NPHome';


function App() {

  function useStateWithSessionStorage(sessionStorageKey) { 
    const [id, setID] = useState(sessionStorage.getItem(sessionStorageKey) || '');
    return [id, setID];
  }

  const [id, setID] = useStateWithSessionStorage('id')

  useEffect(() => {
    sessionStorage.setItem('id', id)
  },
    [id]
  )

  return (
    <div>
        <BrowserRouter>
        <ThemeProvider theme={theme}>
            <Header setID={setID} id={id}/>
            <Router />
            { id ? <Home/> : <LoginHome setID={setID}/>}
        </ThemeProvider>
        </BrowserRouter>
    </div>

  );
}

export default App;