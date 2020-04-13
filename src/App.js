import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import LoginPage from "./components/pages/js/login";
import Clientpage from "./components/pages/js/client";
import HomePage from "./components/pages/js/home";
import ProductsPage from "./components/pages/js/products";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./state/reducers/index";
import StateLoader from "../src/util/util";

const stateLoader = new StateLoader();

const store = createStore(
  allReducers,
  stateLoader.loadState(),
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);
store.subscribe(() => {
  stateLoader.saveState(store.getState());
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path='/' component={LoginPage} />{" "}
        <Route exact path='/home' component={HomePage} />{" "}
        <Route exact path='/home/product' component={ProductsPage} />{" "}
        <Route exact path='/home/client' component={Clientpage} />{" "}
      </BrowserRouter>{" "}
    </Provider>
  );
}

export default App;
