/**
 * Module dependencies.
 */
var fs = require('fs')
var axios = require('axios');
var util = require('util');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 9000;

/** 
 * Config General
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Test Route
app.get('/', function(req, res) {
    console.log("Lancement du serveur");
    res.send('Hello World');
});

app.get('/voyages',function(req, res) {
	res.send("Donnees SQL Voyages");
});

//Route to handle user registration
app.listen(port);

