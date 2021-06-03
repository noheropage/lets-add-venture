const router = require('express').Router();
const { User, Friend, Profile, Photo } = require('../../models');

// /api/profiles ->

//creates a profile for a user
router.post('/', async (req, res) => {
    try{
        // will need to attach current logged_in user to profile's user_id field here
        const profileData = await Profile.findOne({
            where: {
                user_id: req.body.user_id
            }
        }).then((obj) => {
            if (obj) {
                return Profile.update(req.body, {
                    where: {
                        user_id: req.body.user_id
                    }
                })
            } else {
                return Profile.create(req.body)
            }
        });
        console.log(profileData)
        res.status(200).json(profileData)
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;