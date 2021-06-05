const router = require('express').Router();
const { Friend, User } = require('../../models')

//friends are stored in pairs by their id. to render the user data a second get request will be needed to render the user information

router.get('/', async (req, res) => {
    try{
        const friendData = await Friend.findAll();

        res.status(200).json(friendData)
    } catch(err) {
        res.status(500).json(err)
    }
})

router.post('/send', async (req, res) => {
    try {
        const singleUser = await User.findOne({
            where: {
              auth0_id: req.body.auth0_id,
            },
          })
          console.log(singleUser);
          if (!singleUser) {
              res.status(400).json({ message: 'No user found'})
          }
          const friendData = await Friend.findOrCreate({
              where: {
                  receiver: req.body.receiver,
                  sender: singleUser.id,
                  status: req.body.status
              }
          })
          res.status(200).json(friendData)
    } catch (error) {
        res.status(500).json(error)
        console.error(error)
    }
})

router.put('/accept', async (req, res) => {
    try {
        const singleUser = await User.findOne({
            where: {
              auth0_id: req.body.auth0_id,
            },
          })
          console.log(singleUser);
          if (!singleUser) {
              res.status(400).json({ message: 'No user found'})
          }
          const friendData = await Friend.update({
              status: 2
            },
            {
                where: {
                    sender: req.body.sender,
                    receiver: singleUser.id
                }
            }
          )
          res.status(200).json(friendData)
    } catch (error) {
        res.status(500).json(error)
        console.error(error)
    }
})

//post route that posts each pair twice, each user needs to be submitted as friend_display and friend_connect
// Post 
//friend_connect:1 friend_display:2 
//and also 
//friend_connect:2, friend_display: 1


module.exports = router