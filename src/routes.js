const { Router } = require('express');
const UserController = require('./controllers/UserController');
const UserValidator = require('./validators/UserValidator');

const routes = Router();

routes.get('/users', UserController.index);
routes.post('/users', UserValidator.store, UserController.store);
routes.put('/users/:id', UserValidator.update, UserController.update);
routes.delete('/users/:id', UserValidator.destroy, UserController.destroy);

module.exports = routes;
