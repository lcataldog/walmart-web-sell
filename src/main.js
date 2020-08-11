import React, { Component } from "react";
import Router from "./router";
import { Provider } from "./Config/provider";

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider {...this.props}>
        <Router />
      </Provider>
    );
  }
}
