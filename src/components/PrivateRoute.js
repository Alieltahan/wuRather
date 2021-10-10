import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import NavBar from "./NavBar";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const loggedin = useSelector((state) => state.auth.loggedin);

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /login page
    <Route
      {...rest}
      render={(props) =>
        loggedin ? (
          <>
            <NavBar /> <Component {...props} />
          </>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
