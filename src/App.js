import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import LoginPage from './components/pages/js/login';

function App() {
  return <BrowserRouter>
            <Route exact path="/" component={LoginPage}/>
            <Route exact path="/home" component={LoginPage}/>
          </BrowserRouter>
  ;
}

export default App;
