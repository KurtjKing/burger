var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var router = require("./controllers/burgers_controller")


var app = express(); 

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));  

app.use(router);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });