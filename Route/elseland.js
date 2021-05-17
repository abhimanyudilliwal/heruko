var express = require('express');
var Router = express.Router();
const { elseland } = require("../Controller/elseland.controller");


Router.post('/elseland', elseland);

module.exports = Router;