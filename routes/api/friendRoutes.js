const router = require('express').Router();
const { Friend } = require('../../models')

//friends are stored in pairs by their id. to render the user data a second get request will be needed to render the user information

// router.get('/', async (req, res) => {
//     try{
//         const friendData = await Friend.findAll();

//         res.status(200).json(friendData)
//     } catch(err) {
//         res.status(500).json(err)
//     }
// })

//post route that posts each pair twice, each user needs to be submitted as friend_display and friend_connect
// Post 
//friend_connect:1 friend_display:2 
//and also 
//friend_connect:2, friend_display: 1


module.exports = router