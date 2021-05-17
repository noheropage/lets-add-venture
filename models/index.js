const User = require("./User");
const Profile = require('./Profile');

Profile.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = {User, Profile};