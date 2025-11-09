const express = require('express');
const route = express.Router();
const contactsController = require('../controllers/contacts_controller');

route.get('/:id', contactsController.getContactByIdController);

module.exports = route;