const router = require('express').Router();
const userRoutes = require('./userRoutes');
const friendRoutes = require('./friendRoutes');
const imageRoutes = require('./imageRoutes');
const messageRoute = require('./messageRoutes')
const profileRoutes = require('./profileRoutes')

// all routes begin with /api
router.use('/users', userRoutes);
router.use('/friend', friendRoutes);
router.use('/images', imageRoutes)
router.use('/messages', messageRoute)
router.use('/profiles', profileRoutes)

module.exports = router;