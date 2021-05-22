const router = require('express').Router();
const { Friend} = require('../../models')

//friends are stored in pairs by their id. to render the user data a second get request will be needed to render the user information

router.get('/', async (req, res) => {
    try{
        const friendData = await Friend.findAll();

        res.status(200).json(friendData)
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router