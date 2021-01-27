import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";
import "./sign-in.styles.scss";

const SignIn = (props) => {
  const [userCreds, setUserCreds] = useState({ email: "", password: "" });
  const { email, password } = userCreds;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { emailSignInStart } = props;
    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCreds((creds) => {
      return { ...creds, [name]: value };
    });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Login</CustomButton>
          <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn type="button">
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
