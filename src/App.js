import React from 'react';

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


function App() {

  let loginHomePage = null;
  const loggedin = true;

  if (loggedin === false) {
    loginHomePage = ( <Home /> )
  } else {
    // session login stuff
  }

  return (
    <div>
        <BrowserRouter>
        <ThemeProvider theme={theme}>
            <Header />
            <Router />
            { loginHomePage }
        </ThemeProvider>
        </BrowserRouter>
    </div>

  );
}

export default App;