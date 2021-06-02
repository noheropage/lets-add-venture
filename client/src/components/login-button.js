import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap'
import '../pages/Home/Home.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const history = useHistory();
  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Button
      className="home-buttons"
      href='/profile'
      onClick={() => loginWithRedirect(
        {
        redirectUri:'http://localhost:3000/profile',
        onRedirectCallback: {onRedirectCallback}
      }
      )
    }
    >
      Log In
    </Button>
  );
};

export default LoginButton;