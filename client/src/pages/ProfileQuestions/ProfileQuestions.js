import "./ProfileQuestions.css";
import React, { useState } from "react";
import Col from "../../components/Col/Col";
import Row from "../../components/Row/Row";
import Container from "../../components/Container/Container";
import MtnLogo from "../../components/MtnLogo/MtnLogo";
import { Button } from "react-bootstrap";

function ProfileQuestions() {
    const [username, setUsername] = useState();
    const [pronoun, setPronoun] = useState();
    const [prefIntensity, setPrefIntensity] = useState();
    const [climbAbility, setClimbAbility] = useState();
    const [boulderAbility, setBoulderAbility] = useState();
    const [climbHistory, setClimbHistory] = useState();


    //load all users and store them 
    // useEffect(() => {
    //     loadUsers()
    // })

    //
    // function loadUsers() {
    //     API.getUsers()
    //         .then(res =>
    //             setUsername(res.data))
    //         .then(res =>
    //             setPronoun(res.data))
    //         .then(res =>
    //             setPrefIntensity(res.data))
    //         .then(res =>
    //             setClimbAbility(res.data))
    //         .then(res =>
    //             setBoulderAbility(res.data))
    //         .then(res =>
    //             setClimbHistory(res.data))
    //         .catch(err => console.log(err));
    // };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("username is " + username);
        console.log("pronoun is " + pronoun);
        console.log("Preferred Intensity is " + prefIntensity);
        console.log("Climbing Ability is " + climbAbility);
        console.log("Bouldering Ability is " + boulderAbility);
        console.log("Climbing History is " + climbHistory);
    }

    return (
        <div className="profile-q-background">
            <MtnLogo />
            <div className="mt-5 mb-5">
                <h2>Let's get to know you more.</h2>
            </div>

            {/*Form for input areas for the questions  */}

            <form onSubmit={handleSubmit}>
                <Container className="mt-3 px-5">

                    <Row className="form-group pb-4">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Username"
                                name="user-name"
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Col>
                    </Row>

                    <Row className="form-group pb-4">
                        <Col size="12">
                            <h5 className="question-header">Please select your preferred pronoun:</h5>
                            <label className="radio-inline">
                                <input type="radio" defaultChecked name="he" />He
                            </label>
                            <label className="radio-inline">
                                <input type="radio" name="her" />Her
                            </label>
                            <label className="radio-inline">
                                <input type="radio" name="they" />They
                            </label>
                            <label className="radio-inline">
                                <input type="radio" name="other" />Other/Prefer not to answer
                            </label>
                        </Col>
                    </Row>

                    <Row className="form-group pb-4">
                        <Col size="12">
                            <h5 className="question-header">What is your preferred intensity?( 1-5 )</h5>
                            <label className="radio-inline">
                                <input type="radio" defaultChecked name="one" />1
                            </label>
                            <label className="radio-inline">
                                <input type="radio" name="two" />2
                            </label>
                            <label className="radio-inline">
                                <input type="radio" name="three" />3
                            </label>
                            <label className="radio-inline">
                                <input type="radio" name="four" />4
                            </label>
                            <label className="radio-inline">
                                <input type="radio" name="five" />5
                            </label>
                        </Col>
                    </Row>

                    <Row className="form-group pb-4">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Climbing Ability (<5.9 - 5.13+)"
                                name="climb-ability"
                                onChange={e => setClimbAbility(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group pb-4">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Bouldering ABility (V0 - V10+)"
                                name="boulder-ability"
                                onChange={e => setBoulderAbility(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group pb-4">
                        <Col size="12">
                            <input
                                className="form-control climb-history"
                                type="text"
                                placeholder="Tell us about your Climbing History.."
                                name="climb-history"
                                onChange={e => setClimbHistory(e.target.value)}
                            />
                        </Col>
                    </Row>

                    <Button href='/profile' className="signup-button">Submit</Button>

                </Container>
            </form>
        </div>
    )

}

export default ProfileQuestions;