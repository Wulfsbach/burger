var express = require('express');

var router = express.Router();

var burger = require("../models/burger.js");


router.get('/', function(req,res){
    burger.selectAll(function(data){
        var hbsOject ={
            burger: data
        };
        console.log(hbsOject);
        res.render('index',hbsOject);
    });
});

router.post("/api/burgers", function(req,res){
    burger.insertOne([
        "burger_name", "devoured"
    ],[
        req.body.burger_name, req.body.devoured
    ], function(result){
        res.json({id: result.insertId});
    });
});