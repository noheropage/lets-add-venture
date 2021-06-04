import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Button from "react-bootstrap/Button";

function AddFriendButton(props) {
    const isHome = props.ownProfile
    
    const [button, setButton] = useState({
        variant: 'primary',
        text: 'Add Friend',
    })
    const [friend, setFriend] = useState({
        auth0_id: props.auth0_id,
        receiver: props.receiver,
        status: 1,
    })

    useEffect(() => {

    })

    const handleClick = (e) => {
        console.log('Add friend clicked');
        handleAPI()
        setButton(e.target = {
            text: 'Pending',
            variant: 'success',
            disabled: true
        })
    }

    const handleAPI = async () => {
        console.log(friend);
        await API.sendFriendRequest(friend).then(res => {
            console.log(res.data);
            setButton({
                    text: 'Pending...',
                    variant: "success",
                    disabled: true
                })
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <Button
        hidden={isHome}
        onClick={handleClick}
        variant={button.variant}
        disabled= {button.disabled}
        >
            {button.text}
        </Button>
    )
}

export default AddFriendButton;