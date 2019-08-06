import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import LoginPage from './components/pages/js/login';
import HomePage from './components/pages/js/home';

function App() {
  return <BrowserRouter>
            <Route exact path="/" component={LoginPage}/>
            <Route exact path="/home" component={HomePage}/>
          </BrowserRouter>
  ;
}

export default App;
