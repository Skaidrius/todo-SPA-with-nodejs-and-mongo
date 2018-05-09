var express = require("express");
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/todos");

router.route("/")
// index route
    .get(helpers.getTodos)
// create route
    .post(helpers.createTodo);

router.route("/:todoId")
    //show route
    .get(helpers.showTodo)
    // update route
    .put(helpers.updateTodo)
    // delete route
    .delete(helpers.deleteTodo);

module.exports = router;