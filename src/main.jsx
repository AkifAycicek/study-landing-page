import { loadFonts } from "@plugins/webfontloader.js";
import "@style/vendors/index.scss";
import { setupi18N } from "./plugins/i18n.js";
// Comment trick for disable auto organize import
import "@style/main.scss";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

Promise.allSettled([loadFonts(), setupi18N()]).then(async () => {
  reactRoot.render(
    <HashRouter>
      <App />
    </HashRouter>,
  );
});
