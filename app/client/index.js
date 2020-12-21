import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import { render } from "react-dom";
import Home from "./components/HomePage";
import { HashRouter, Route } from "react-router-dom";

render(
  <HashRouter>
    <Route path="/" component={Home} />
  </HashRouter>,
  document.getElementById("app-portal")
);
