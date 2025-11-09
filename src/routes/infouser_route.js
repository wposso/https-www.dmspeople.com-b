const express = require('express');
const route = express.Router();
const infoUserController = require('../controllers/infouser_controller');

route.get('/', infoUserController.infoUserController);
route.get('/:id', infoUserController.infoUserByIdController);

module.exports = route;