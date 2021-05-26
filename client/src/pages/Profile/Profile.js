import React, { useState, useEffect, useRef } from "react";
import { ListGroup, Button, Form, Image } from "react-bootstrap";
import placeholder from "../../images/profile_placeholder.png";
import "./Profile.css";
import Nav from "../../components/Nav";
import API from '../../utils/API'

// establish state for profile image and user files
function Profile() {
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState(placeholder);

  const [user, setUser] = useState({})
  
  // hardcode id: will need to be changed when we have access control
  const id = 1;
  // retrieve profile info from api and set it to user object
  useEffect(() => {
    API.getUser(id)
    .then(res => {
      console.log(res.data);
      setUser(res.data.profile)
      // finds the last photo of the array and displays it
      const photoLength = res.data.photos.length
      setPreviewSource(res.data.photos[photoLength - 1].url)
    })
    .catch(err => console.log(err));
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
      await fetch("/api/images/upload", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
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
          <div className='userImg'>
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
            <div className='username'>
          <h1> {user.user_name} </h1>
          <h6> {user.user_pronoun} </h6>
        </div>
        <div className='list'>
        <ListGroup variant="flush" >
          <ListGroup.Item>Preferred Intensity: {user.user_intensity}</ListGroup.Item>
          <ListGroup.Item>Climbing Ability: {user.climbing_ability}</ListGroup.Item>
          <ListGroup.Item>Bouldering Ability: {user.bouldering_ability}</ListGroup.Item>
          <ListGroup.Item>Climbing History: {user.past_climbs}</ListGroup.Item>
        </ListGroup>
        </div>
      </div>
    </div>
  );
}

export default Profile;
