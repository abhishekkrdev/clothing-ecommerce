import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => {
  const { TOGGLE_CART_HIDDEN } = CartActionTypes;
  return {
    type: TOGGLE_CART_HIDDEN
  };
};
