var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");



app.get("/", function(req, res){
	res.render("landing");
});

app.get("/connect4", function(req, res){
	res.render("realconnect");
});

app.get("/three", function(req,res){
	res.render("three")
});

app.get("/four", function(req,res){
	res.render("four")
});

app.get("/five", function(req,res){
	res.render("five")
});

app.use(express.static(__dirname + "/public"));

function widthChange(width){
	$('.container').css("grid-template-columns", "repeat(width, max-content)");
}

app.listen(3000, function(){
	console.log("Tac is tacking!")
});