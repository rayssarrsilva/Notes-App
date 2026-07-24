import "./styles/header.css";
import "./styles/InitialPage.css"

import InitialPage from "./pages/InitialPage.js";
import NavigationApp from "./controllers/NavigationController.js";

const app = document.body;

const navigationApp = new NavigationApp(app);

navigationApp.InitialPage();