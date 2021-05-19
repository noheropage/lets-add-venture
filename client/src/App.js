  import './App.css';
  import Signup from "./pages/SignUp/SignUp";
  import React from "react";
  import Home from './pages/Home/Home';
  // import Upload from './components/Upload/upload'
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
  import Profile from './pages/Profile';
  
  
  function App() {
    return (
      <Router>
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/signup'>
          <Signup />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;