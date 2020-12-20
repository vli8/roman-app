import React from "react";
import { render } from "react-dom";
import Home from "./components/HomePage";
import Results from "./components/ResultsPage";
import { HashRouter, Route } from "react-router-dom";

render(
  <HashRouter>
    <Route path="/" component={Home} />
    {/* <Route path="/results" component={Results} /> */}
  </HashRouter>,
  document.getElementById("app-portal")
);
