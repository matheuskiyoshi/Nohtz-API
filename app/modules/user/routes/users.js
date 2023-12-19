var express = require('express');
var router = express.Router();
const UsersController = require('../controllers/users.controller')


router.post('/register', UsersController.create);
router.post('/login', UsersController.login);

module.exports = router;
