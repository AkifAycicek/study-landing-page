import { setupi18N } from "@plugins/i18n.js";
import { loadFonts } from "@plugins/webfontloader.js";
import "@style/vendors/index.scss";
// Comment trick for disable auto organize import
import "@style/main.scss";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

Promise.allSettled([loadFonts(), setupi18N()]).then(async () => {
  reactRoot.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
});
