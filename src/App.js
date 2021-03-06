import React, { Fragment, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";
import { checkUserSession } from "./redux/user/user.actions";

import "./App.css";
const App = (props) => {
  const { checkUserSession, currentUser } = props;
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />)}
        />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserSession: () => dispatch(checkUserSession())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
