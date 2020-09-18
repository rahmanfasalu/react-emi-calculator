import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import GlobalStyle from "./theme/GlobalStyle";
import store from "./stor/configureStore";
import { Provider as ReduxProvider } from "react-redux";

import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <GlobalStyle />
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
