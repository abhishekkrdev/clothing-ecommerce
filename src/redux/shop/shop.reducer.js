import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  const {
    FETCH_COLLECTIONS_START,
    FETCH_COLLECTIONS_SUCCESS,
    FETCH_COLLECTIONS_FAILURE
  } = ShopActionTypes;
  switch (action.type) {
    case FETCH_COLLECTIONS_START: {
      return { ...state, isFetching: true };
    }
    case FETCH_COLLECTIONS_SUCCESS: {
      return { ...state, collections: action.payload, isFetching: false };
    }
    case FETCH_COLLECTIONS_FAILURE: {
      return { ...state, isFetching: false, errorMessage: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default shopReducer;
