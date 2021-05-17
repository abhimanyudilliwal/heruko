var express = require('express');
var Router = express.Router();
const { land } = require("../Controller/ownland.controller");


Router.post('/ownland', land);

module.exports = Router;