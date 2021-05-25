import React, { useState, useEffect, useRef } from "react";
import { Container, ListGroup, Button, Form, Image } from "react-bootstrap";
import placeholder from "../../images/profile_placeholder.png";
import "./Profile.css";
import Nav from "../../components/Nav";
import API from '../../utils/API'

function Profile() {
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState(placeholder);

  const [user, setUser] = useState({})
  
  const id = 1;
  useEffect(() => {
    API.getUser(id)
    .then(res => {
      console.log(res.data);
      setUser(res.data.profile)
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
      // await fetch("/api/images/upload", {
      //   method: "POST",
      //   body: JSON.stringify({ data: base64EncodedImage }),
      //   headers: { "Content-type": "application/json" },
      // });
      setFileInputState("");
      // setPreviewSource("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="sky">
      <Nav />
      <h1>Lets+Venture</h1>
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

          {previewSource && (
            <Image
              onClick={handleClick}
              src={previewSource}
              alt="picture to be uploaded"
              style={{ height: "160px" }}
              roundedCircle
            />
          )}
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

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <h4> {user.user_name} </h4>
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
