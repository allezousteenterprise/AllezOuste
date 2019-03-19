/**
 * Module dependencies.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var login = require('./lienBdd');
var port = 9000;
var axios = require('axios');

/** 
 * Config General
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('build'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Test Route

var router = express.Router();

router.get('/', function(req, res) {
    console.log("Lancement du serveur");
    res.send('Hello World');
});


//Route to handle user registration
router.post('/register',login.register);
router.post('/login',login.login);
router.post('/voyages',login.voyages);
app.use('/api', router);
app.listen(port);
