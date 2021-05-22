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
}