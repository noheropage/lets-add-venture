import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
// import getToken from './APIconfig'

const baseUrl = "http://localhost:3001";

export default {
  //get users
  postUsers: function (name) {
    console.log(name);
    return axios.post(baseUrl + "/api/profiles/search/", name);
  },

  //get single user
  getUser: function (id) {
    return axios.get(baseUrl + "/api/users/" + id);
  },
  //saving user data
  saveUser: function (userData) {
    return axios.post(baseUrl + "/api/users", userData);
  },
  // this gets the profile data for a specific user
  getProfile: function (id) {
    return axios.get(baseUrl + "/api/users/profile/" + id);
  },
  //this gets a users friends by the user id
  getFriend: function (id) {
    return axios.get(baseUrl + "/api/users/friends/" + id);
  },

  getClimb: function (lat, lng, dist) {
    return axios.get(
      `https://climb-api.openbeta.io/geocode/v1/climbs?latlng=${lat}%2C${lng}&radius=${dist}`
    );
  },

  saveProfile: function (profileData) {
    return axios.post(baseUrl + "/api/profiles/", profileData);
  },

  //gets one past climb by the pastClimb id
  getPastClimbs: function (id) {
    return axios.get(baseUrl + "/api/pastClimbs/" + id);
  },

  //get a single past climb with user id
  getPastClimb: function (id) {
    return axios.get(baseUrl + "/api/users/pastClimbs/" + id);
  },

  //save climb
  saveToPastClimb: function (climbData) {
    console.log(climbData);
    return axios.post(baseUrl + "/api/pastClimbs", climbData);
  },

  //delete past climb
  deletePastClimb: function (id) {
    return axios.delete(baseUrl + "/api/pastClimbs" + id);
  },
};
