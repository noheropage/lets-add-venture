import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Button from "react-bootstrap/Button";

function AcceptFriendButton(props) {
  const isHome = props.ownProfile;
  const friendStatus = props.friendStatus;
  const hideButton = isHome || friendStatus != "accept request";

  const [button, setButton] = useState({
    variant: "info",
    text: "Accept Request",
  });
  const [friend, setFriend] = useState({
    auth0_id: props.auth0_id,
    sender: props.sender,
    status: 2,
  });

  useEffect(() => {
    setFriend({
      auth0_id: props.auth0_id,
      sender: props.sender,
      status: 2,
    });
  }, [props]);

  const handleClick = (e) => {
    handleAPI();
    setButton(
      (e.target = {
        text: "Accepted!",
        variant: "success",
        disabled: true,
      })
    );
  };

  const handleAPI = () => {
    API.acceptFriendRequest(friend)
      .then((res) => {
        setButton({
          text: "Pending...",
          variant: "success",
          disabled: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Button
      hidden={hideButton}
      onClick={handleClick}
      variant={button.variant}
      disabled={button.disabled}
    >
      {button.text}
    </Button>
  );
}

export default AcceptFriendButton;
