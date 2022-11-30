const router = require('express').Router();
const authMiddleware = require('../middlewares/auth.middleware')
const userController = require('../controllers/users.controller')
const authController = require('../controllers/auth.controller')


router.get('/', (req, res, next) => res.json({ok: true}))

//AUTH

router.post('/login', authController.login)
//router.post('/register', authController.register)

//USER

router.get('/users/profile', authMiddleware.isAuthenticated, userController.getCurrentUser)

module.exports = router;