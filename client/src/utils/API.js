import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
// import getToken from './APIconfig'


export default {
        
    //get users
    getUsers: function () {
        return axios.get("https://dev-dwofmg2f.us.auth0.com/api/v2/users");
    },

    //get single user
    getUser: function (id) {        
        return axios.get("/api/users/" + id)
    },

    //saving user data
    saveUser: function (userData) {
        return axios.post("/api/users", userData);
    },

    getClimb: function () {
        return axios.get('https://climb-api.openbeta.io/geocode/v1/climbs?latlng=47.027231%2C-119.963876&radius=3')
    }

    
}