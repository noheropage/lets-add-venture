import logo from './logo.svg';
import './App.css';
import { Jumbotron } from 'react-bootstrap';
import alaska from './images/alaska.jpeg';
 
function App() {
  return (
    <div className="App">
      <Jumbotron style={{ backgroundImage: "url(/dark-grey-terrazzo.png)", color: "white" }}>
          <h1>Lets+Venture</h1>
          <br/>
          <img src={alaska} style={{ height: "300px", width: "90%"}}></img>
          <p style={{ margin: "20px"}}>Connect with others to enjoy and explore the great outdoors!</p>
          <button style={{margin: "5px", width: "45%", background: "#295939", color: "white", height: "35px", fontFamily: "revert"}}>Log in</button>
          <button style={{margin: "5px", width: "45%", background: "#295939", color: "white", height: "35px", fontFamily: "revert"}}>Sign Up</button>
          <br/>
          <br/>
          <br/>
      </Jumbotron>
    </div>
  );
}

export default App;