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

  return (
    <div>
        <BrowserRouter>
        <ThemeProvider theme={theme}>
            <Header />
            <Router />
            <Home />
        </ThemeProvider>
        </BrowserRouter>
    </div>

  );
}

export default App;