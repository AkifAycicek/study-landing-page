import { loadFonts } from "@plugins/webfontloader.js";
import "@style/vendors/index.scss";
// Comment trick for disable auto organize import
import "@style/main.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

loadFonts().then(() => {
  reactRoot.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
});
