import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";

import App from "./App";
import store from "./services/store";
import "react-toastify/dist/ReactToastify.css";
import {UserAuthContextProvider} from "./context/UserAuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <UserAuthContextProvider>
      <BrowserRouter>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </UserAuthContextProvider>
  </Provider>
);
