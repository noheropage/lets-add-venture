import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Button from "react-bootstrap/Button";

function AcceptFriendButton(props) {
    const isHome = props.ownProfile
    console.log(isHome);
    const friendStatus = props.friendStatus
    console.log(friendStatus);
    const hideButton = (isHome || friendStatus != 'accept request');
    
    const [button, setButton] = useState({
        variant: 'info',
        text: 'Accept Request',
    })
    const [friend, setFriend] = useState(
        {
        auth0_id: props.auth0_id,
        sender: props.sender,
        status: 2,
    }
    )

    useEffect(() => {
        setFriend({
            auth0_id:props.auth0_id,
            sender:props.sender,
            status:2
        })        
    } ,[props])

    

    const handleClick = (e) => {
        console.log('Accept friend clicked');
        
        handleAPI()
        setButton(e.target = {
            text: 'Accepted!',
            variant: 'success',
            disabled: true
        })
    }

    const handleAPI = () => {
        console.log(friend);
        API.acceptFriendRequest(friend).then(res => {
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

    console.log(hideButton);
    return (
        <Button
        hidden={hideButton}
        onClick={handleClick}
        variant={button.variant}
        disabled= {button.disabled}
        >
            {button.text}
        </Button>
    )
}

export default AcceptFriendButton;