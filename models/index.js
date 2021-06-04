const User = require("./User");
const Profile = require('./Profile');
const Friend = require('./Friend')
const Photo = require('./Photo')
const PastClimbs = require('./PastClimbs')

Profile.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasOne(Profile, {
    foreignKey: 'user_id'
})

// field friend_display is how we will display the friend, friend_connect is how the db knows who is connected. Each pair of friends will need two entries in the db, as each friend needs an id in friend_display

User.belongsToMany(User, {
    through: Friend,
    as: 'sender',
    foreignKey: 'sender'
});

User.belongsToMany(User, {
    through: Friend,
    as: 'receiver',
    foreignKey: 'receiver'
});

User.hasMany(PastClimbs, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

PastClimbs.belongsTo(User,{
    foreignKey: 'user_id'

})

User.hasMany(Photo, {
    foreignKey: 'uploader_id'
})

Photo.belongsTo(User, {
    foreignKey: 'uploader_id'
})

module.exports = {User, Profile, Friend, Photo, PastClimbs};