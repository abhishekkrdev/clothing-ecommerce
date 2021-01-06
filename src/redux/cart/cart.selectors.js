import { createSelector } from "reselect";

// Input Selectors -> Takes whole state and returns slice of it
const selectCart = (state) => state.cart;

// Memoziation Selector
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, cur) => acc + cur.quantity, 0)
);
