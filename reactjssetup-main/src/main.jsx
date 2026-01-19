import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { AppKitProvider } from "./utilities/providers/AppKitProvider.jsx";

createRoot(document.getElementById("root")).render(
  <AppKitProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppKitProvider>,
);
