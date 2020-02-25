/* eslint-disable no-console */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";

import { checkIfProducts } from "../actions/actions";

const ConnectedProductShowcase = ({
  products,
  checkIfProducts: checkProducts
}) => {
  useEffect(() => {
    checkProducts();
  }, [checkProducts]);
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const allProducts = products.map(({ name }) => {
    return <li key={name}>{name}</li>;
  });
  return <ul>{allProducts}</ul>;
};

const mapStateToProps = state => ({ products: state.products });

ConnectedProductShowcase.propTypes = {
  checkIfProducts: propTypes.func.isRequired,
  products: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      colors: propTypes.arrayOf(propTypes.string),
      sizes: propTypes.arrayOf(propTypes.string)
    })
  )
};

ConnectedProductShowcase.defaultProps = {
  products: []
};

export default connect(mapStateToProps, { checkIfProducts })(
  ConnectedProductShowcase
);
