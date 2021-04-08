import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { AllContext } from '../../App';

const PrivetRoute = ({children, ...rest }) => {
    const [cart , setCart ,loginUser , setLogInUser] = useContext(AllContext)
    return (
        <Route
        {...rest}
        render={({ location }) =>
        loginUser.email ? (
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
}

export default PrivetRoute;