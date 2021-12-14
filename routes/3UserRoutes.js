const express = require('express');
const router = express.Router();
const controller = require('../controllers/3UserController');
const middleware = require('../middlewares/3Middleware');
router.get('/factorial', 
middleware.checkNumQueryparam,
middleware.checkNumQueryInteger,
controller.factorial);

module.exports = router;
