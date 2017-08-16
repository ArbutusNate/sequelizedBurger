// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
  // Table from which to select and cb function.
  selectAll: function(cb){
    console.log("orm.js running - selectAll function. Querying SQL: ");
    var queryString = "SELECT * FROM burgers ORDER BY createdAt;";
    console.log(queryString);
    connection.query(queryString, function(err,result) {
      if (err) {
        return err;
      } else {
      console.log("No error from SQL. Result: ");
      cb(result); //SQL output is passed to callback function from burger.js.
      }
    })
  },
  create: function(val, cb){
    console.log("orm.js running - create function.");
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?);";
    console.log("Query String: " + queryString);
    connection.query(queryString, val, function(err,result) {
      console.log(val);
      console.log(queryString);
      if(err){
        throw err;
      } else {
        cb(result)
      }
    })
  },
  devour: function(devoured, condition, cb){
    console.log("orm.js running - devour function.");
    console.log(devoured);
    console.log(condition);
    var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?";
    connection.query(queryString, [devoured, condition], function(err, result){
      if(err){
        throw err;
      } else {
        cb(result);
      }
    })
  }
  // Insert a New Burger into burgers
  // insertOne: function(val, cb){
  //   connection.query("INSERT INTO burgers (burger_name) VALUES (?);", [val],
  //     function(err, res) {
  //     if (err) {
  //       throw err;
  //     }
  //     cb(result);
  //   })
  // }
  // Update a burger as devoured
  // updateOne: function(burgerId, cb){
  //   connection.query("UPDATE burgers SET ? WHERE ?;",
  //     [{devoured : true}, {id : burgerId}],
  //     function(err,res) {
  //       if (err) {
  //         throw err
  //       }
  //     }
  //     cb(result);
  //   )
  // }
};

module.exports = orm;