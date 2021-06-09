import "./App.css";
import ProfileQuestions from "./pages/ProfileQuestions/ProfileQuestions";
import Signup from "./pages/SignUp/SignUp";
import MapTester from "./pages/MapTest/MapTest";
import LogIn from "./pages/LogIn/LogIn";
import React from "react";
import Home from "./pages/Home/Home";
import HomeTest from "./pages/HomeTest";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Map from "./pages/Map/Map";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/loading";
import ProtectedRoute from "./auth/protected-route";
import ExternalApi from "./utils/external-api";
import SimpleMap from "./components/SimpleMap/SimpleMap";

function App() {
  const { isLoading } = useAuth0;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route exact path="/external-api">
            <ExternalApi />
          </Route>
          {/* <Route exact path="/hometest">
            <HomeTest />
          </Route> */}
          <ProtectedRoute
            path={["/profile", "/profile/:id"]}
            component={Profile}
          />
          <ProtectedRoute exact path="/map" component={Map}></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/questions"
            component={ProfileQuestions}
          ></ProtectedRoute>
          <Route exact path="/testmap">
            <MapTester />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
