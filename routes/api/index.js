const router = require('express').Router();
const userRoutes = require('./userRoutes');
const imageRoutes = require('./imageRoutes')

// all routes begin with /api
router.use('/users', userRoutes);
router.use('/images', imageRoutes)

module.exports = router;