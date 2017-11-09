import { render } from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import App from "./pf-lib/appContainer/App.jsx";
import store from "./store";
import {viewsConfig, navbarConfig} from './configs'

render (
  <Provider store={store}>
    <App viewsConfig={viewsConfig} navbarConfig={navbarConfig}/>
  </Provider>, document.getElementById('root')
);