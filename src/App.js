import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import LoginPage from './components/pages/js/login';
import HomePage from './components/pages/js/home';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import  allReducers  from './state/reducers/index';

const store = createStore(allReducers, {}, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())

function App() {
  return <Provider store={store}>
          <BrowserRouter>
            <Route exact path="/" component={LoginPage}/>
            <Route exact path="/home" component={HomePage}/>
          </BrowserRouter>
        </Provider>
  ;
}

export default App;
