/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./assets/styles/globalStyles";
import Routes from "./routes";
import { ThemeProvider } from 'styled-components';
import { themes } from './styles/themes';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
