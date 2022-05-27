import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import store from "./store/index";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
axios.defaults.baseURL = "http://localhost:8181/api";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("tokenKey");
  if (token) {
    config.headers["token"] = token;
  }
  config.headers["Content-Type"] = "application/json";
  return config;
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
