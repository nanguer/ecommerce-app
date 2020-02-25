/* eslint-disable no-console */
import React from "react";
import { hot } from "react-hot-loader";
// eslint-disable-next-line import/no-named-as-default
import AppBody from "./components/AppBody";

import "./styles/styles.scss";

const App = () => {
  return <AppBody />;
};

export default hot(module)(App);
