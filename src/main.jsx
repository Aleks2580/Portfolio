import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");

const renderApp = () => {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

// Check if createRoot is available
if (ReactDOM.createRoot) {
  renderApp();
} else {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </BrowserRouter>
    </React.StrictMode>,
    rootElement
  );
}
