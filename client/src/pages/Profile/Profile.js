import React, { useState, useEffect, useRef } from "react";
import { ListGroup, Button, Form, Image } from "react-bootstrap";
import placeholder from "../../images/profile_placeholder.png";
import "./Profile.css";
import Nav from "../../components/Nav";
import API from "../../utils/API";
import ExternalApi from "../../utils/external-api";
// import CallApi from '../../utils/tokenHook'
import { useApi } from "../../utils/tokenHook";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
require('dotenv').config();

// establish state for profile image and user files
const Profile = () => {
  const { getAccessTokenSilently, user } = useAuth0();
  const auth0id = user.sub.split('|', 2)[1]

  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState(placeholder);

  const [profile, setProfile] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `${audience}`,
        });

        const url = `http://localhost:3001/api/users/${auth0id}`;

        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        // console.log(res.data.profile);
        
        setProfile(res.data.profile);
        console.log(res.data);
        const photoLength = res.data.photos.length
        if (photoLength) {
          setPreviewSource(res.data.photos[photoLength -1].url)
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    getUser();
  }, []);

  const fileUploader = useRef(null);

  const handleClick = (e) => {
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
          user_id: profile.user_id
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
              type="submit"
              value="submit"
              onClick={handleSubmitFile}
            >
              Submit
            </Button>
          </div>
        </div>
        <div className="username">
          <h1> {profile.user_name}</h1>
          <h6> {profile.user_pronoun} </h6>
          <Button href='/questions'>
            Edit Profile
          </Button>
        </div>
        <div className="list">
          <ListGroup variant="flush">
            <ListGroup.Item>Preferred Intensity: {profile.user_intensity}</ListGroup.Item>
            <ListGroup.Item>Climbing Ability: {profile.climbing_ability}</ListGroup.Item>
            <ListGroup.Item>Bouldering Ability: {profile.bouldering_ability}</ListGroup.Item>
          <ListGroup.Item>Climbing History: {profile.past_climbs}</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default Profile;
