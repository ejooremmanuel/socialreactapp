import React from "react";
import { render } from "react-dom";
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";

import App from "./App";

render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
