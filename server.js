var express = require("express");
var bodpar = require('body-parser');
var hndl= require('express-handlebars');
var routes=  require('./controllers/burgers_controller.js');

var PORT= process.env.PORT || 8080;

var app=express();

app.use(express.static("public"));

app.use(bodpar.urlencoded({ extended: true}));

app.use (bodpar.json());


app.engine("handlebars", hndl({ defaultLayout: "main"}));
app.set('view engine', 'handlebars');

app.use(routes);

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});


