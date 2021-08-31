import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { persistor, store } from "./store";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from "./theme";
const theme = createMuiTheme(themeFile);

ReactDOM.render(
  // <React.StrictMode>
  <MuiThemeProvider theme={theme} className="app">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </MuiThemeProvider>,
  // </React.StrictMode>
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
