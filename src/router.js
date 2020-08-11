/* eslint-disable import/no-useless-path-segments */
import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Apps from "App";

const Router = () => (
  <div>
    <HashRouter hashType="noslash">
      <Switch>
        <Route exact path="/" component={Apps} />
      </Switch>
    </HashRouter>
  </div>
);

export default Router;
