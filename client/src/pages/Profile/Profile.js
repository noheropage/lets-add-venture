import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import './Profile.css';

function Profile() {
  return (
    <div className='Profile sky'>
      
        <h1>Lets+Venture</h1>
     
        <div>
            <div className="userImg">
                <a href='#'>
                  <img className="photo" 
                  src= 'https://images.unsplash.com/photo-1500579886065-5a7705cbf1f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                  />
                </a>
            </div>
          

            <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    }}>
                <h4> user name here</h4>
            </div>
           
            <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                     }}>
                <h5>Looks Like its Going To Be A Good Day</h5>
            </div>
            
            <div 
                  style={{
                  display: 'flex', 
                  justifyContent: 'space-around', 
                  width: '100%', 
                  margin:'30px 30px 30px 30px' }}>
              <ListGroup as='ul'>
                <h5>Preferred Intensity</h5> 
                <h5>Climbing Ability</h5> 
                <h5>Bouldering Ability</h5>
                <h5>Climbing History</h5> 
              </ListGroup>
            </div>
        </div>
      <Container style={{ marginTop: 30 }}>
      
      </Container>
    </div>
  );
}

export default Profile;