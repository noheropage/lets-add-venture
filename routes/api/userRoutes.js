const router = require('express').Router();
const { User, Friend, Profile, Photo } = require('../../models');
const jwtCheck = require('../../utils/jwt')

//get all users --> Delete when no longer needed <--
router.get('/', async (req, res) => {
    try{
        const userData = await User.findAll();
        console.log('get user data-------')
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
})
//get a single user by the id
router.get('/:id', jwtCheck, async (req, res) => {
    try{
        const singleUser = await User.findByPk(req.params.id, {
            include: [
            {
                model: User,
                through: Friend,
                //the alias for this field is friends
                as: 'friends'
            },
            {
                model: Profile
            },
            {
                model: Photo
            }
        ]
        });
        
        if(!singleUser) {
            res.status(400).json({message: 'there is no user with that ID'})
        }
        res.status(200).json(singleUser);
    } catch(err) {
        console.log(err)
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
});

router.put('/:id', async (req, res) => {
    try{
        const updateData = await User.update({
            nameFirst: req.body.nameFirst,
            nameLast: req.body.nameLast,
            email: req.body.email,
            password: req.body.password
        },
        {
            individualHooks: true,
            where: {
                id: req.params.id,
            }
        }
        )
        console.log('updated data', updateData)

        res.status(200).json(updateData)
    } catch (err) {
        res.status(500).json(err)
    }

})



module.exports = router;