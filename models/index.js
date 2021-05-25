const User = require("./User");
const Profile = require('./Profile');
const Friend = require('./Friend')
const Photo = require('./Photo')

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
    as: 'friends',
    foreignKey: 'friend_display'
});

User.belongsToMany(User, {
    through: Friend,
    as: 'friend_connect',
    foreignKey: 'friend_connect'
});

// User.hasMany(Friend, {
//     as:"sender",
//     foreignKey: 'friend_one',
// })
// User.hasMany(Friend, {
//     as:'receiver',
//     foreignKey: 'friend_two',
// })

// Friend.belongsTo(User, {
//     as: 'sender',
//     foreignKey: 'friend_one',

// });

// Friend.belongsTo(User, {
//     as: 'receiver',
//     foreignKey: 'friend_two',

// });
User.hasMany(Photo, {
    foreignKey: 'uploader_id'
})

Photo.belongsTo(User, {
    foreignKey: 'uploader_id'
})

module.exports = {User, Profile, Friend, Photo};