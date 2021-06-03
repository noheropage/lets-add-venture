import "./ProfileQuestions.css";
import React, { useState, useEffect } from "react";
import MtnLogo from "../../components/MtnLogo/MtnLogo";
import { Button, Form, Col, Row, Container } from "react-bootstrap";
import axios from 'axios'
import API from '../../utils/API'
import { useAuth0 } from '@auth0/auth0-react'

function ProfileQuestions() {
    const { getAccessTokenSilently, user } = useAuth0();
    const domain = "https://dev-dwofmg2f.us.auth0.com/api/v2/";
    

  const [username, setUsername] = useState();
  const [pronoun, setPronoun] = useState();
  const [intensity, setIntensity] = useState();
  const [climbAbility, setClimbAbility] = useState();
  const [boulderAbility, setBoulderAbility] = useState();
//   const [climbHistory, setClimbHistory] = useState();

const [profile, setProfile] = useState({});

useEffect(() => {
    const getUser = async () => {
      console.log("user id:", user.sub);
      const auth0id = user.sub.split('|', 2)[1]
      console.log(auth0id);


      try {
        const accessToken = await getAccessTokenSilently({
          audience: `${domain}`,
        });

        const url = "http://localhost:3001/api/users/";

        const res = await axios.post(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          auth0_id: auth0id,
          email: user.email

        });
        console.log(res.data);
        
        setProfile(res.data[0]);
        console.log(profile);
        // console.log(accessToken);
        
      } catch (error) {
        console.log(error.message);
      }
    };

    getUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("pronoun is " + pronoun);
    console.log("Preferred Intensity is " + intensity);
    console.log("Climbing Ability is " + climbAbility);
    console.log("Bouldering Ability is " + boulderAbility);
    // console.log("Climbing History is " + climbHistory);
    // will need way to assign the logged_in user's user_id to the profile
    try {
      const accessToken = await getAccessTokenSilently({
        audience: `${domain}`,
      });

      const url = "http://localhost:3001/api/users/";

      const res = await axios.post(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        auth0_id: auth0id,
        email: user.email

      });
      
    } catch (error) {
      
    }
    API.saveProfile({
        user_name: username,
        user_pronoun: pronoun,
        user_intensity: intensity,
        climbing_ability: climbAbility,
        bouldering_ability: boulderAbility,
        // past_climbs: climbHistory
    }).then(res => {
        console.log(res.data);
    }).catch(err => console.log(err))
  };

//   if fields are filled out, submit button should post this data to the API which will use ?user?profile route to save the data in the profile table. Will need user_id of the logged_in user to make sure it is saving correctly

  return (
    <div className="profile-q-background">
      <MtnLogo />
      <div className="mt-3 mb-5">
        <h2>Tell us more about you...</h2>
      </div>

      {/*Form for input areas for the questions  */}

      <Form onSubmit={handleSubmit}>
        <Container className="mt-2 px-5">
          <Row className="form-group pb-4">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Pick a username"
                name="user-name"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Col>
          </Row>

          <Row className="form-group pb-4">
            <Col size="12">
              <h5 className="question-header">Preferred pronouns:</h5>

              <div
                className="mb-2"
                onChange={(e) => setPronoun(e.target.value)}
              >
                <Form.Check
                  value="He/Him/His"
                  label="He/Him/His"
                  name="pronouns"
                  type="radio"
                  id="masculine_pronouns"
                />
                <Form.Check
                  value="She/Her/Hers"
                  label="She/Her/Hers"
                  name="pronouns"
                  type="radio"
                  id="feminine_pronouns"
                />
                <Form.Check
                  value="They/Them/Theirs"
                  label="They/Them/Theirs"
                  name="pronouns"
                  type="radio"
                  id="neutral_pronouns"
                />
                <Form.Check
                  value="Prefer not to disclose"
                  label="Prefer not to disclose"
                  name="pronouns"
                  type="radio"
                  id="na_pronouns"
                />
              </div>
            </Col>
          </Row>

          <Row className="form-group pb-4">
            <Col size="12">
              <h5 className="question-header">
                How would you rate your climbing intensity?
              </h5>
              <h6 className="question-header">(5 being the most intense)</h6>
              <div
                className="mb-2"
                onChange={(e) => setIntensity(e.target.value)}
              >
                <Form.Check
                  inline
                  value="1"
                  label="1"
                  name="intensity"
                  type="radio"
                  id="lowest_intensity"
                />
                <Form.Check
                  inline
                  value="2"
                  label="2"
                  name="intensity"
                  type="radio"
                  id="low_intensity"
                />
                <Form.Check
                  inline
                  value="3"
                  label="3"
                  name="intensity"
                  type="radio"
                  id="mid_intensity"
                />
                <Form.Check
                  inline
                  value="4"
                  label="4"
                  name="intensity"
                  type="radio"
                  id="high_intensity"
                />
                <Form.Check
                  inline
                  value="5"
                  label="5"
                  name="intensity"
                  type="radio"
                  id="highest_intensity"
                />
              </div>
            </Col>
          </Row>

          <Row className="form-group pb-4">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Climbing Ability (<5.9 - 5.13+)"
                name="climb-ability"
                onChange={(e) => setClimbAbility(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="form-group pb-4">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Bouldering Ability (V0 - V10+)"
                name="boulder-ability"
                onChange={(e) => setBoulderAbility(e.target.value)}
              />
            </Col>
          </Row>
          {/* <Row className="form-group pb-4">
            <Col size="12">
              <input
                className="form-control climb-history"
                type="text"
                placeholder="List your previous climbs..."
                name="climb-history"
                onChange={(e) => setClimbHistory(e.target.value)}
              />
            </Col>
          </Row> */}

          <Button type="submit" className="home-buttons">
            Submit
          </Button>
        </Container>
      </Form>
    </div>
  );
}

export default ProfileQuestions;
