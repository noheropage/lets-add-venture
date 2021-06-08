import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import '../pages/Home/Home.css'

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const history = useHistory();
  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Button size="lg"
      className="home-buttons"
      // href='/questions'
      onClick={() =>
        loginWithRedirect({
          redirectUri: 'https://lets-add-venture.netlify.app/questions',
          onRedirectCallback: { onRedirectCallback },
          screen_hint: "signup",
        })
      }
    >
      <b>Sign Up</b>
    </Button>
  );
};

export default SignupButton;