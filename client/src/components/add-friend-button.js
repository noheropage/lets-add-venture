import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Button from "react-bootstrap/Button";

function AddFriendButton(props) {
    const isHome = props.ownProfile
    console.log(isHome);
    const [button, setButton] = useState()

    const handleClick = () => {
        // change look of button...? set state?
        setButton({
            value: 'Pending',
            variant: "success",
            disabled: true
        })
        handleAPI()
    }

    const handleAPI = () => {
        API.sendFriendRequest({
            auth0_id: props.auth0_id,
            receiver: props.id,
            status: 1
        })
    }

    return (
        <Button
        hidden={isHome}
        onClick={handleClick}
        variant='primary'
        >
            Add friend
        </Button>
    )
}

export default AddFriendButton;