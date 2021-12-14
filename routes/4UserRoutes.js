const express = require('express');
const router = express.Router();
const controller = require('../controllers/4UserController');
const middleware = require('../middlewares/4Middleware');
router.get('/numero', 
controller.random);

module.exports = router;
