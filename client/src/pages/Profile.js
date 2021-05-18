import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Container } from "react-bootstrap";
//import { Row } from "react-bootstrap";
import '../components/css/Main.css';
import sky from '../components/Images/sky.png';

// function backgroundImage() {
//   return <img src={sky} alt='sky'/>;
// }
// var sectionStyle = {
//     bacgroundImage: `url(${sky})`
// }

// class App extends Components {
//     render() {
//         return <img src={sky} alt='sky'/>
//     }
// }


function Profile() {
  return (
    <div className='Profile'>
      
        <h1>Lets+Venture</h1>
     
        <div>
            <div className="userImg">
                <img className="photo" 
                src= 'https://images.unsplash.com/photo-1500579886065-5a7705cbf1f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                />
            </div>
          

            <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    margin: '30px, 30px, 30px,30px'
                    }}>
                <h4> user name here</h4>
            </div>
           
            <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    margin: '30px, 30px, 30px,30px'

                     }}>
                <h5>Looks Like its Going To Be A Good Day</h5>
            </div>
            
            <div style={{
                  display: 'flex', 
                  justifyContent: 'space-around', 
                  width: '100%', 
                  margin:'30px 30px 30px 30px' }}>
              <ul>
                <li> <a href='#'>Preferred Intensity</a> 
                </li> 
                <li> <a href='#'>Climbing Ability</a> 
                </li> 
                <li> <a href='#'>Bouldering Ability</a> 
                </li> 
                <li> <a href='#'>Climbing History</a> 
                </li>
              </ul>
            </div>
        </div>
      <Container style={{ marginTop: 30 }}>
        {/* <Row>
          <Col size="md-12">
            <h2>Ok! Lets Go.</h2>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              placeholder- add in 
            </p>
            <p>
              placeholder 
            </p>
            <p>
              placeholder 
            </p>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default Profile;