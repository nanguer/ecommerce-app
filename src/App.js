/* eslint-disable no-console */
import React from "react";
import { hot } from "react-hot-loader";
// eslint-disable-next-line import/no-named-as-default
import { Container, AppBar, Typography } from "@material-ui/core";
import ProductShowcase from "./components/ProductShowcase";

import "./styles/styles.scss";

const App = () => {
  return (
    <>
      <AppBar position="static">
        <Typography variant="h6" color="inherit">
          Photos
        </Typography>
      </AppBar>
      <Container maxWidth="lg">
        <h1>React - Redux eCommerce Application Boilerplate</h1>

        <ProductShowcase />
      </Container>
    </>
  );
};

export default hot(module)(App);
