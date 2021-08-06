import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Redirect } from "react-router-dom";
import { auth } from "../firebase";
import SpinnerLoad from "./SpinnerLoad";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [user, loading] = useAuthState(auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          <SpinnerLoad />
        ) : user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
export default PrivateRoute;
