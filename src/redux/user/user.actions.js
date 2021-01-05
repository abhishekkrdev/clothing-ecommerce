import { UserActionTypes } from "./user.types";

// Action Creator To Return a action to Set Current User
export const setCurrentUser = (user) => {
  const { SET_CURRENT_USER } = UserActionTypes;
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};
