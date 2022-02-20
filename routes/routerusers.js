
const express = require('express');
const Router = express();
const Controllers = require('../Controllers/users');

Router.post('/users', Controllers.Add)
Router.post('/faker', Controllers.Faker)
Router.get('/users', Controllers.GetAll)
Router.get('/users/:id', Controllers.GetOne)
Router.patch('/users/:id', Controllers.UpdateOne)
Router.delete('/users/:id', Controllers.DeleteOne)

module.exports = Router;

