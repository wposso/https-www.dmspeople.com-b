const express = require('express');
const route = express.Router();
const reqRoute = require('../controllers/request_controller')

route.get('/:id', reqRoute.requestByIdController)

module.exports = route;