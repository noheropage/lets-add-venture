import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Button from "react-bootstrap/Button";

function AddFriendButton(props) {
  const isHome = props.ownProfile;
  const friendStatus = props.friendStatus;
  const hideButton = isHome || friendStatus != "add friend";

  const [button, setButton] = useState({
    variant: "primary",
    text: "Add Friend",
  });
  const [friend, setFriend] = useState({
    auth0_id: props.auth0_id,
    receiver: props.receiver,
    status: 1,
  });

  useEffect(() => {
    setFriend({
      auth0_id: props.auth0_id,
      receiver: props.receiver,
      status: 1,
    });
  }, [props]);

  const handleClick = (e) => {
    handleAPI();
    setButton(
      (e.target = {
        text: "Pending",
        variant: "success",
        disabled: true,
      })
    );
  };

  const handleAPI = () => {
    API.sendFriendRequest(friend)
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

export default AddFriendButton;
