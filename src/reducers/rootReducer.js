import { POPULATE_DATA } from "../actions/types";

const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE_DATA:
      return {
        ...state,
        products: action.data
      };
    default:
      return state;
  }
};

export default rootReducer;
