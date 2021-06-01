const sequelize = require('../config/connection');
const {User, Profile, Friend, Photo, PastClimbs} = require('../models');

const userData = require('./userData.json');
const profileData = require('./profileData.json');
const friendData = require('./friendData.json');
const photoData = require('./photoData.json')
const pastClimbsData = require('./pastClimbsData.json')

const seedDatabase= async () => {
    await sequelize.sync({ force: true });
    
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const profiles = await Profile.bulkCreate(profileData)
    const friends = await Friend.bulkCreate(friendData)
    const photos = await Photo.bulkCreate(photoData)
    const pastClimbs = await PastClimbs.bulkCreate(pastClimbsData)

    process.exit(0);
};

seedDatabase();