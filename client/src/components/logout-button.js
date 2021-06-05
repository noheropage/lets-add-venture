import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap'
import "../App.css";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      className="logout-button btn-info"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;