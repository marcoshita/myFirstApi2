const express = require('express');
const router = express.Router();
const controller = require('../controllers/Ex2Controller');
const middleware = require('../middlewares/Ex2Middleware');
router.get('/ex2', 
middleware.checkString,
middleware.checkNumQueryParam,
controller.ex2);

module.exports = router;