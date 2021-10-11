import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../UseHooks/UseAuth';

const PrivetRoute = ({ children, ...rest }) => {
    const {user} = UseAuth();
    return (
      <Route
      {...rest}
      render={({ location })=> user.displayName ? children: <Redirect
      to={{
        pathname: "/login",
        state: { from: location }
      }}
      ></Redirect>}
      
      >

      </Route>
    );
};

export default PrivetRoute;