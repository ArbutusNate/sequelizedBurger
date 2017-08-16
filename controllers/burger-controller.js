var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
  console.log("burger-controller.js running GET");
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log("handlebars object: " + hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req,res){
  console.log("burger-controller.js running POST");
  console.log("New Burger Name: " + req.params.name)
  // console.log("resuest: " + req.body);
  // console.log("res: " + res.body);
  burger.create(req.body.newBurger, function (){
    res.redirect("/");
  });
});

router.put("/:id", function(req,res){
  console.log("burger-controller.js running PUT");
  var condition = req.params.id;
  var devoured = true;
  burger.devour(devoured, condition, function(){
    res.redirect("/");
  })
  // console.log("burger ID to be devoured: " req.params.id)
})

// router.update("/:id", function(req,res) {
//   burger.devour()
// })

module.exports = router;