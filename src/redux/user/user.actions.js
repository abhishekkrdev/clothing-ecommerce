import { UserActionTypes } from "./user.types";

export const emailSignInStart = (user) => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: user
  };
};

export const googleSignInStart = () => {
  return {
    type: UserActionTypes.GOOGLE_SIGN_IN_START
  };
};

export const signInSuccess = (user) => {
  return {
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
  };
};

export const signInFailure = (error) => {
  return {
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
  };
};
