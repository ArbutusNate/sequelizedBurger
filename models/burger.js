var orm = require("../config/orm.js");

var burger = {
  //Pass in callback to ORM
  all: function(cb) {
    console.log("burger.js running 'all' function")
    orm.selectAll(function(res) {
      cb(res);
    })
  },
  create: function(val , cb){
    orm.create(val, function(req, res){
      console.log("Req: " + req);
      console.log("Res: " + res);
      cb(res);
    })
  },
  devour: function(devoured, condition, cb){
    console.log("burger.js devoured: " + devoured);
    console.log("burger.js condition: " + condition);
              //Devoured, condition, cb)
    orm.devour(devoured, condition, function(req, res){
      console.log("burger.js is running 'devour' function on id" + condition + ".");
      cb(res);
    })
  }
  //Pass in BurgerID and callback
  // devour: function(){}
}

module.exports = burger;