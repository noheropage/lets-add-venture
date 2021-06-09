import React, { useState, useEffect, useRef } from "react";
import { ListGroup, Button, Form, Image } from "react-bootstrap";
import placeholder from "../../images/profile_placeholder.png";
import "./Profile.css";
import Nav from "../../components/Nav";
import API from "../../utils/API";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import AddFriendButton from "../../components/send-friend-request-btn";
import AcceptFriendButton from "../../components/accept-friend-request-btn";
import { propTypes } from "react-bootstrap/esm/Image";
require("dotenv").config();
import { useParams, useLocation, Link, Redirect } from "react-router-dom";
import SavedClimbs from "../../components/saved-climbs";

// establish state for profile image and user files
const Profile = () => {
  const location = useLocation();
  const testUrl = location.pathname.split("/");
  let id = parseInt(testUrl[2]) || 0;

  const { getAccessTokenSilently, user } = useAuth0();
  const auth0id = user.sub.split("|", 2)[1];

  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState(placeholder);

  const [profile, setProfile] = useState({});
  const [isHome, setIsHome] = useState(false);
  const [friendStatusId, setFriendStatusId] = useState("0");
  const [isFriend, setIsFriend] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [climbArray, setClimbArray] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  let loggedIn;

  const getUser = async () => {
    const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
    if (!id) {
      id = auth0id;
      setIsHome(true);
    }

    try {
      const accessToken = await getAccessTokenSilently({
        audience: `${audience}`,
      });

      const url = `https://lets-add-venture.herokuapp.com/api/users/profile/${id}`;

      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!res.data && isHome) {
        document.location = "/questions";
      }

      let loggedInData;
      if (!isHome) {
        const authUrl = `https://lets-add-venture.herokuapp.com/api/users/profile/${auth0id}`;
        loggedInData = await axios.get(authUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        loggedIn = loggedInData.data;
      }
      setProfile({
        username: res.data.profile.user_name,
        pronoun: res.data.profile.user_pronoun,
        intensity: res.data.profile.user_intensity,
        climbingAbility: res.data.profile.climbing_ability,
        boulderingAbility: res.data.profile.bouldering_ability,
        pastClimbs: res.data.pastClimbs,
        userId: res.data.id,
      });

      setClimbArray(res.data.pastClimbs);

      if (res.data.auth0_id === auth0id && !isHome) {
        setIsHome(true);
      } else {
        setIsHome(false);
        const friendsList = getFriends(res.data);
        const friendsStatus = getFriendStatus(friendsList);

        if (friendsStatus.status === 2) {
          setFriendStatusId("friends");
          setIsFriend(true);
        } else if (friendsStatus.status === 1) {
          if (friendsStatus.receiver === loggedIn.id) {
            setFriendStatusId("accept request");
          } else {
            setFriendStatusId("pending request");
            setIsPending(true);
          }
        } else {
          setFriendStatusId("add friend");
        }
      }

      const photoLength = res.data.photos.length;
      if (photoLength) {
        setPreviewSource(res.data.photos[photoLength - 1].url);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getFriendStatus = (list) => {
    // pull up my data
    const friends = list.filter((el) => el.id === loggedIn.id);
    if (friends.length > 0) {
      return friends[0].friend;
    } else {
      return 0;
    }
  };

  const getFriends = (data) => {
    const friendsList = data.sender.concat(data.receiver);
    return friendsList;
  };

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
      await fetch("https://lets-add-venture.herokuapp.com/api/images/upload", {
        method: "POST",
        body: JSON.stringify({
          data: base64EncodedImage,
          user_id: profile.userId,
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

          <Button
            href="/questions"
            variant="outline-info"
            size="sm"
            hidden={!isHome}
          >
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

          <Button variant="success" disabled hidden={!isFriend}>
            Friend
          </Button>
          <Button variant="success" disabled hidden={!isPending}>
            Pending...
          </Button>
        </div>
        <div className="list">
          <ListGroup variant="flush">
            <ListGroup.Item>
              Preferred Intensity: {profile.intensity}
            </ListGroup.Item>
            <ListGroup.Item>
              Climbing Ability: {profile.climbingAbility}
            </ListGroup.Item>
            <ListGroup.Item>
              Bouldering Ability: {profile.boulderingAbility}
            </ListGroup.Item>
            <ListGroup.Item>
              Saved Climbs:{" "}
              {climbArray.map((climb) => (
                <SavedClimbs
                  key={climb.api_id}
                  climbTitle={climb.climb_name}
                  difficulty={climb.rating}
                ></SavedClimbs>
              ))}
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default Profile;
