const router = require('express').Router();
const {PastClimbs} = require('../../models');

router.get('/:id', async (req, res) => {
    try{
        const climbData = await PastClimbs.findByPk(req.params.id)

        if(!climbData) {
            res.status(400).json({message: "There is no climb by that id"})
        }
        res.status(200).json(climbData)

    } catch (err) {
        res.status(500).json(err)
        }
})
router.post('/', async (req,res) => {
    try{
        const climbData = await PastClimbs.create({
            ...req.body
        })

        res.status(200).json(climbData)
    } catch(err) {
        res.status(500).json(err)
        }
})

//Delete a climb
router.delete('/:id', async (req,res) => {
    try{
        const climbData = await PastClimbs.destroy({
            where: {
                id: req.params.id
            },            
        })

        if(!climbData) {
            res.status(400).json({message: 'no climb with that id'})
        }
        res.status(200).json(climbData)
    } catch(err) {
        res.status(500).json(err)
        }

})

module.exports = router