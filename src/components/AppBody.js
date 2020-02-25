import React from "react";
import { Container, AppBar, Typography } from "@material-ui/core";
import ProductShowcase from "./ProductShowcase";

const AppBody = () => {
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

export default AppBody;
