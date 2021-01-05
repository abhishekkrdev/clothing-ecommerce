// Action Creator To Set Current User
export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    payload: user
  };
};
