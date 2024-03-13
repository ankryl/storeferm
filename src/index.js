import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/app/app";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./thems/default-theme";

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
