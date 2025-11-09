const express = require('express');
const router = express.Router();
const userController = require('../controllers/users_controller');

router.get('/', userController.getUsersController);
router.get('/:id', userController.getUserByIdController);

module.exports = router;