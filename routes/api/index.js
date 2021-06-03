const router = require('express').Router();
const userRoutes = require('./userRoutes');
const friendRoutes = require('./friendRoutes');
const imageRoutes = require('./imageRoutes');
const messageRoute = require('./messageRoutes')
const profileRoutes = require('./profileRoutes')
const pastClimbsRoutes = require('./pastClimbsRoutes')

// all routes begin with /api
router.use('/users', userRoutes);
router.use('/friend', friendRoutes);
router.use('/images', imageRoutes)
router.use('/messages', messageRoute)
router.use('/profiles', profileRoutes)
router.use('/pastClimbs', pastClimbsRoutes)

module.exports = router;