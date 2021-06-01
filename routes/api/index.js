const router = require('express').Router();
const userRoutes = require('./userRoutes');
const friendRoutes = require('./friendRoutes');
const imageRoutes = require('./imageRoutes')
const pastClimbsRoutes = require('./pastClimbsRoutes')

// all routes begin with /api
router.use('/users', userRoutes);
router.use('/friend', friendRoutes);
router.use('/images', imageRoutes)
router.use('/pastClimbs', pastClimbsRoutes)

module.exports = router;