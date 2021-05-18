import logo from './logo.svg';

import Profile from './pages/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from 'react';
import Navbar from './pages/Navbar';
import './components/css/Main.css';


class App extends Component {
  render() {

    return (
      <div className="sky">
        <Navbar />
        <Profile/>
      </div>
    );
  }

  
}

export default App;
