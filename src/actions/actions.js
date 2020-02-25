// import axios from "axios";
import productData from "../data/products.json";

import { ADD_DATA, REMOVE_DATA, POPULATE_DATA } from "./types";

export const add = data => ({ type: ADD_DATA, data });
export const remove = data => ({ type: REMOVE_DATA, data });
export const populate = data => ({ type: POPULATE_DATA, data });

export const fectchProducts = () => dispatch => {
  try {
    const { products } = productData;
    dispatch(populate(products));
  } catch (e) {
    console.log(e);
  }
};

export const checkIfProducts = () => dispatch => {
  const products = JSON.parse(localStorage.getItem("products"));

  if (!products || products.length === 0) {
    dispatch(fectchProducts());
  } else {
    dispatch(populate(products));
  }
};
