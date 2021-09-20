const { Router } = require('express');
const { login, register } = require('./controller')

const router = new Router();

router.post('/login', login)
router.post('/register', register)

module.exports = router;