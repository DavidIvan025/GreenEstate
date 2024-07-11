<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./services/state/app/store.js";
import App from "./App";
import "./css/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './services/state/app/store.js'
import App from './App'
import './css/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
>>>>>>> 1c325eb56a95b56aca6e16e74e09b141bce11010
