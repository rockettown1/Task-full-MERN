import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../global/AuthContext";

const PrivateRoute = ({ render: Component, path }) => {
  const [isAuthenticated] = useContext(AuthContext);
  return (
    <div>
      <Route path={path} render={props => (isAuthenticated ? <Component /> : <Redirect to="/" />)} />
    </div>
  );
};

export default PrivateRoute;
