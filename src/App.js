import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "./routes/index";

import "./App.css";

const Routes = ({ history }) => {
  // usually I check authentication here, like if the user is authenticated or not
  return <Router history={history}>{renderRoutes()}</Router>;
};

function App() {
  return <Routes />;
}

export default App;
