import React, { useState, useEffect, useRef } from "react";
import { ListGroup, Button, Form, Image } from "react-bootstrap";
import placeholder from "../../images/profile_placeholder.png";
import "./Profile.css";
import Nav from "../../components/Nav";
import API from "../../utils/API";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import AddFriendButton from '../../components/send-friend-request-btn'
import AcceptFriendButton from '../../components/accept-friend-request-btn'
import { propTypes } from "react-bootstrap/esm/Image";
require('dotenv').config();
import { useParams, useLocation, Link, Redirect } from 'react-router-dom'

// establish state for profile image and user files
const Profile = () => {
  const location = useLocation()
  const testUrl = location.pathname.split('/')
      // const urlArrayLength = testUrl.pathname.split('/')
      let id = parseInt(testUrl[2]) || 0
      console.log(id);
      
      // console.log(urlArrayLength);
  

  const { getAccessTokenSilently, user } = useAuth0();
  const auth0id = user.sub.split("|", 2)[1];

  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState(placeholder);

  const [profile, setProfile] = useState({});
  const [isHome, setIsHome] = useState(false)
  const [friendStatusId, setFriendStatusId] = useState('0')
  const [isFriend, setIsFriend] = useState(false)
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    getUser();
  }, []);

  let loggedIn;

  const getUser = async () => {
    const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
    if (!id) {
      id = auth0id
      setIsHome(true)
      // console.log('No id, you home: ' + id);
    } 
    
    try {
      const accessToken = await getAccessTokenSilently({
        audience: `${audience}`,
      });

      const url = `http://localhost:3001/api/users/profile/${id}`;

      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      // console.log(res.data);
      if (!res.data && isHome) {
        return <Redirect to='/questions'></Redirect>; 
      }

      let loggedInData;
      if (!isHome) {
        const authUrl = `http://localhost:3001/api/users/profile/${auth0id}`
        loggedInData = await axios.get(authUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        loggedIn = loggedInData.data
        // console.log("This is my info: " + loggedIn.profile);
        // console.log(loggedIn.profile);
      }
      setProfile({
        username: res.data.profile.user_name,
        pronoun: res.data.profile.user_pronoun,
        intensity: res.data.profile.user_intensity,
        climbingAbility: res.data.profile.climbing_ability,
        boulderingAbility: res.data.profile.bouldering_ability,
        pastClimbs: res.data.profile.past_climbs,
        userId: res.data.id
      });
      
      // console.log(res.data);


      if (res.data.auth0_id === auth0id && !isHome) {
        // console.log('you are looking at your own id, weirdo');
        setIsHome(true)
      } else {
        // console.log('Not your profile');
        setIsHome(false)
        const friendsList = getFriends(res.data)
        const friendsStatus = getFriendStatus(friendsList)

        if (friendsStatus.status === 2) {
          // console.log("you're friends");
          setFriendStatusId('friends')
          setIsFriend(true)
        } else if (friendsStatus.status === 1) {
         if (friendsStatus.receiver === loggedIn.id) {
          // console.log('accept?');
          setFriendStatusId('accept request')
         } else {
            // console.log('pending');
            setFriendStatusId('pending request')
            setIsPending(true)
          }
       } else {
         console.log("you're not friends");
         setFriendStatusId('add friend')
       }
      }

      
      const photoLength = res.data.photos.length
      if (photoLength) {
        setPreviewSource(res.data.photos[photoLength -1].url)
      }

    } catch (error) {
      console.log(error.message);
    }
  };

  const getFriendStatus = (list) => {
    // pull up my data
    console.log(loggedIn);
    const friends = list.filter(el => el.id === loggedIn.id);
    if (friends.length > 0) {
      return friends[0].friend
    }
    else {
      return 0
    }
  }

  const getFriends = (data) => {
    const friendsList = data.sender.concat(data.receiver)
    console.log(friendsList);
    return friendsList
  }

  const fileUploader = useRef(null);

  const handleClick = (e) => {
    if (!isHome) {
      return;
    }
    fileUploader.current.click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      await fetch("http://localhost:3001/api/images/upload", {
        method: "POST",
        body: JSON.stringify({
          data: base64EncodedImage,
          user_id: profile.user_id,
        }),
        headers: { "Content-type": "application/json" },
      });
      setFileInputState("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="sky">
      <Nav />
      <div>
        <div>
          <Form>
            <input
              type="file"
              style={{ display: "none" }}
              ref={fileUploader}
              name="image"
              onChange={handleFileInputChange}
              value={fileInputState}
              className="form-input"
            ></input>
          </Form>
          <div className="userImg">
            {previewSource && (
              <Image
                onClick={handleClick}
                src={previewSource}
                alt="picture to be uploaded"
                style={{ height: "160px" }}
                roundedCircle
              />
            )}
          </div>
          <div>
            <Button
              hidden={!fileInputState}
              variant="success"
              className="mt-2"
              type="submit"
              value="submit"
              size="sm"
              onClick={handleSubmitFile}
            >
              Submit
            </Button>
          </div>
        </div>
        <div className="username">
          <h1> {profile.username}</h1>
          <h6> {profile.pronoun} </h6>

          <Button href='/questions' variant='outline-info' size='sm' hidden={!isHome}>
            Edit Profile
          </Button>

          <AddFriendButton
            receiver={profile.userId}
            ownProfile={isHome}
            auth0_id={auth0id}
            friendStatus={friendStatusId}
          ></AddFriendButton>

          <AcceptFriendButton
            sender={profile.userId}
            ownProfile={isHome}
            auth0_id={auth0id}
            friendStatus={friendStatusId}
          ></AcceptFriendButton>

          <Button variant='success' disabled hidden={!isFriend}>Friend</Button>
          <Button variant='success' disabled hidden={!isPending}>Pending...</Button>

        </div>
        <div className="list">
          <ListGroup variant="flush">
            <ListGroup.Item>Preferred Intensity: {profile.intensity}</ListGroup.Item>
            <ListGroup.Item>Climbing Ability: {profile.climbingAbility}</ListGroup.Item>
            <ListGroup.Item>Bouldering Ability: {profile.boulderingAbility}</ListGroup.Item>
          <ListGroup.Item>Saved Climbs: {profile.past_climbs}</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default Profile;
