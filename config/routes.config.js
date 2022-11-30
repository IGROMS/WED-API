const router = require('express').Router();
const authMiddleware = require('../middlewares/auth.middleware')
const userController = require('../controllers/users.controller')


router.get('/', (req, res, next) => res.json({ok: true}))

//USER

router.get('/users/profile', authMiddleware.isAuthenticated, userController.getCurrentUser)

module.exports = router;