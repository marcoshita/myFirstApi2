const express = require('express');
const router = express.Router();
const userController = require('../controllers/1UserController');
router.get('/list', userController.list);
router.get('/profile/:userId', userController.profile);
router.get('/list2', userController.list2);
router.get('/list3', userController.list3);
module.exports = router;
