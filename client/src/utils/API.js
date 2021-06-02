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

<<<<<<< HEAD
  getClimb: function () {
    return axios.get(
      "https://climb-api.openbeta.io/geocode/v1/climbs?latlng=47.027231%2C-119.963876&radius=3"
    );
  },

  saveClimb: function (climbData) {
    console.log(climbData);
    return axios.post("/api/users", climbData);
  },
};
=======
    getClimb: function () {
        return axios.get('https://climb-api.openbeta.io/geocode/v1/climbs?latlng=47.027231%2C-119.963876&radius=3')
    },

    //get past climbs
    getPastClimbs: function () {
        return axios.get("/api/pastClimbs");
    },

    //get a single past climb
    getPastClimb: function (id) {
        return axios.get("/api/pastClimbs/" + id);
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
>>>>>>> 3d0765e81b18b4878625f4cbe656e966a06f0a00
