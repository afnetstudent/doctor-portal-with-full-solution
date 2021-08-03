import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Usercontext } from '../../App';
import jwt_decode from "jwt-decode";

const PrivateRoute = ({ children, ...rest }) => {
  const  [loggingUser, setLogUser] = useContext(Usercontext)
console.log(loggingUser?.email)
  const isLoggedIn = () => {
    const token = sessionStorage.getItem('token');
    if(!token){
      return false;
    }
    const decodedToken = jwt_decode(token);
    const currentTime = new Date().getTime() / 1000;
    return decodedToken.exp > currentTime;
  }
  return (
      <Route
      {...rest}
      render={({ location }) =>
      (loggingUser.email || isLoggedIn()) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;