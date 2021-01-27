import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions";
import "./sign-up.styles.scss";

const SignUp = (props) => {
  const [userCreds, setUserCreds] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userCreds;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCreds((prevCreds) => ({ ...prevCreds, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { signUpStart } = props;
    if (password !== confirmPassword) {
      alert(`Passwords don't match`);
      return;
    }
    signUpStart({ displayName, email, password });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpStart: (userCreds) => dispatch(signUpStart(userCreds))
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
