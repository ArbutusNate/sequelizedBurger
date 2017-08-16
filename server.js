var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");

// var port = 3000;

var app = express();

// Serve static content for the app from the "asset" directory in the application directory.
app.use(express.static("assets"));

app.use(bodyParser.urlencoded({ extended: true }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger-controller.js");

app.use("/", routes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port: 3000")
});