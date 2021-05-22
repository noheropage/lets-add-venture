import React, { useState, useEffect, useRef } from "react";
import { Container, ListGroup, Button, Form, Image } from "react-bootstrap";
import placeholder from "../../images/profile_placeholder.png";
import "./Profile.css";
import Nav from "../../components/Nav";

function Profile() {
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState(placeholder);

  const fileUploader = useRef(null)

  const handleClick = (e) => {
    fileUploader.current.click()
  }

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
      setPreviewSource("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Profile sky">
      <Nav />
      <h1>Lets+Venture</h1>
      <div>
        <div>
          <Form onSubmit={handleSubmitFile}>
            <input
              // ref={imageRef}
              type="file"
              style={{ display: 'none' }}
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
          <Button hidden={!(fileInputState)} variant="success" type="submit" value="submit">Submit</Button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <h4> user name here</h4>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <h5>Looks Like its Going To Be A Good Day</h5>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            margin: "30px 30px 30px 30px",
          }}
        >
          <ListGroup>
            <ListGroup.Item>Preferred Intensity</ListGroup.Item>
            <ListGroup.Item>Climbing Ability</ListGroup.Item>
            <ListGroup.Item>Bouldering Ability</ListGroup.Item>
            <ListGroup.Item>Climbing History</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <Container style={{ marginTop: 30 }}></Container>
    </div>
  );
}

export default Profile;