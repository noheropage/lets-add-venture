import "./ProfileQuestions.css";
import React, { useState, useEffect, useRef } from "react";
import MtnLogo from "../../components/MtnLogo/MtnLogo";
import { Button, Form, Col, Row, Container } from "react-bootstrap";
import axios from "axios";
import API from "../../utils/API";
import { useAuth0 } from "@auth0/auth0-react";
require("dotenv").config();
import Nav from "../../components/Nav/index";

function ProfileQuestions() {
  const { getAccessTokenSilently, user } = useAuth0();
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

  const [username, setUsername] = useState();
  const [pronoun, setPronoun] = useState();
  const [intensity, setIntensity] = useState();
  const [climbAbility, setClimbAbility] = useState();
  const [boulderAbility, setBoulderAbility] = useState();

  const [profile, setProfile] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const auth0id = user.sub.split("|", 2)[1];

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `${audience}`,
        });

        const url = "https://lets-add-venture.herokuapp.com/api/users/";

        const res = await axios.post(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          auth0_id: auth0id,
          email: user.email,
        });

        setProfile(res.data[0]);
        setUsername(res.data[0].profile.user_name);
        setPronoun(res.data[0].profile.user_pronoun);
        setIntensity(res.data[0].profile.user_intensity);
        setClimbAbility(res.data[0].profile.climbing_ability);
        setBoulderAbility(res.data[0].profile.bouldering_ability);
      } catch (error) {
        console.log(error.message);
      }
    };

    getUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const accessToken = await getAccessTokenSilently({
        audience: `${audience}`,
      });

      const url = "https://lets-add-venture.herokuapp.com/api/profiles/";

      const res = await axios.post(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        user_name: username,
        user_pronoun: pronoun,
        user_intensity: intensity,
        climbing_ability: climbAbility,
        bouldering_ability: boulderAbility,
        user_id: profile.id,
      });
    } catch (error) {
      console.error(error);
    }

    document.location = "/profile";
  };

  return (
    <div className="profile-q-background">
      <Container fluid>
        <Nav className="" />

        <Row className="mb-2">
          <h6 className="tell-us-more">Tell us more about you...</h6>
        </Row>

        {/*Form for input areas for the questions  */}
        <Row className="pl-2 pr-2">
          <Form
            className="questions-form text-center mb-5"
            onSubmit={handleSubmit}
          >
            <div className="form-group mt-2 px-5 pt-1">
              <label className="labels" for="inputUsername">
                Username
              </label>
              <input
                className="pb-1 form-control"
                type="text"
                placeholder="Username (required)"
                name="user-name"
                onChange={(e) => setUsername(e.target.value)}
                defaultValue={username}
              />

              <div className="form-group mt-2 px-5">
                <div
                  className="mb-2"
                  onChange={(e) => setPronoun(e.target.value)}
                >
                  <label className="labels" for="pronouns">
                    Preferred Pronoun:
                  </label>
                  <Form.Check
                    inline
                    value="He/Him/His"
                    label="He | Him | His"
                    name="pronouns"
                    type="radio"
                    id="masculine_pronouns"
                    checked={"He/Him/His" === pronoun}
                  />
                  <Form.Check
                    value="She/Her/Hers"
                    label="She | Her | Hers"
                    name="pronouns"
                    type="radio"
                    id="feminine_pronouns"
                    checked={"She/Her/Hers" === pronoun}
                  />
                  <Form.Check
                    value="They/Them/Theirs"
                    label="They | Them | Theirs"
                    name="pronouns"
                    type="radio"
                    id="neutral_pronouns"
                    checked={"They/Them/Theirs" === pronoun}
                  />
                  <Form.Check
                    value="Prefer not to disclose"
                    label="Prefer not to disclose"
                    name="pronouns"
                    type="radio"
                    id="na_pronouns"
                    checked={"Prefer not to disclose" === pronoun}
                  />
                </div>
              </div>

              <div className="form-group ">
                <label className="labels question-header">
                  How would you rate your climbing intensity?
                </label>
                <label className=" labels question-header">
                  (5 being the most intense)
                </label>
                <div
                  className="mb-1"
                  onChange={(e) => setIntensity(e.target.value)}
                >
                  <Form.Check
                    inline
                    value="1"
                    label="1"
                    name="intensity"
                    type="radio"
                    id="lowest_intensity"
                    checked={"1" == intensity}
                  />
                  <Form.Check
                    inline
                    value="2"
                    label="2"
                    name="intensity"
                    type="radio"
                    id="low_intensity"
                    checked={"2" == intensity}
                  />
                  <Form.Check
                    inline
                    value="3"
                    label="3"
                    name="intensity"
                    type="radio"
                    id="mid_intensity"
                    checked={"3" == intensity}
                  />
                  <Form.Check
                    inline
                    value="4"
                    label="4"
                    name="intensity"
                    type="radio"
                    id="high_intensity"
                    checked={"4" == intensity}
                  />
                  <Form.Check
                    inline
                    value="5"
                    label="5"
                    name="intensity"
                    type="radio"
                    id="highest_intensity"
                    checked={"5" == intensity}
                  />
                </div>
              </div>

              <Row className="form-group">
                <Col size="12">
                  <label>Climbing Ability:</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Climbing Ability (<5.9 - 5.13+)"
                    name="climb-ability"
                    onChange={(e) => setClimbAbility(e.target.value)}
                    defaultValue={climbAbility}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col size="12">
                  <label>Bouldering Ability:</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Bouldering Ability (V0 - V10+)"
                    name="boulder-ability"
                    onChange={(e) => setBoulderAbility(e.target.value)}
                    defaultValue={boulderAbility}
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

              <Button
                type="submit"
                className="home-buttons"
                disabled={!username}
              >
                Submit
              </Button>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default ProfileQuestions;
