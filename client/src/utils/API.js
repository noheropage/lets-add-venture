import axios from "axios";

export default {
    //get users
    getUsers: function () {
        return axios.get("/api/users");
    },

    //get single user
    getUser: function (id) {
        return axios.get("/api/users/" + id);
    },

    //saving user data
    saveUser: function (userData) {
        return axios.post("/api/users", userData);
    },
    // this gets the profile data for a specific user
    getProfile: function (id) {
        return axios.get('/api/users/profile/' + id)
    },
    //this gets a users friends by the user id
    getFriend: function (id) {
        return axios.get('/api/users/friends/' + id)
    },

    getClimb: function () {
        return axios.get('https://climb-api.openbeta.io/geocode/v1/climbs?latlng=47.027231%2C-119.963876&radius=3')
    },

    //gets one past climb by the pastClimb id
    getPastClimbs: function (id) {
        return axios.get("/api/pastClimbs/" +id );
    },

    //get a single past climb with user id
    getPastClimb: function (id) {
        return axios.get("/api/users/pastClimbs/" + id);
    },

    //save climb
    saveToPastClimb: function (climbData) {
        return axios.post("/api/pastClimbs", climbData);
    },

    //delete past climb
    deletePastClimb: function (id) {
        return axios.delete("/api/pastClimbs" + id);
    }
}