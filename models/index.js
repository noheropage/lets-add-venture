const User = require("./User");
const Profile = require('./Profile');
// const Updates = require('./Updates');
const Friend = require('./Friend')

Profile.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// updates allow users to become friends
// Updates.belongsTo(User, {
//     foreignKey:'user_id_fk',
//     onDelete: 'CASCADE',    
// });

// friend belongs to users in two ways, either by being friend one or being friend two
User.hasMany(Friend, {
    as: "sender",
    foreignKey: 'friend_one',
})
User.hasMany(Friend, {
    as: 'receiver',
    foreignKey: 'friend_two',
})

Friend.belongsTo(User, {
    as: 'sender',
    foreignKey: 'friend_one',

});

Friend.belongsTo(User, {
    as: 'receiver',
    foreignKey: 'friend_two',

});



module.exports = {
    User,
    Profile,
    //   Updates,
    Friend
};