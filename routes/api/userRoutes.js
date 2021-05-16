const router = require('express').Router();
const { User } = require('../../models');

//get all users --> Delete when no longer needed <--
router.get('/', async (req, res) => {
    try{
        const userData = await User.findAll();
        console.log('user data', userData)
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
})
//creates a user
router.post('/', async (req, res) => {
    try{
        const userData = await User.create(req.body);
        console.log(userData)
        res.status(200).json(userData)
    } catch (err) {
        res.status(400).json(err)
    }
})



module.exports = router;