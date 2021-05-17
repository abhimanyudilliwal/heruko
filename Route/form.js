var express = require('express');
var Router = express.Router();
const { form } = require("../Controller/form.controller");


Router.post('/form', form);

module.exports = Router;