/**
 * Module dependencies.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var login = require('./lienBdd');
var port = 9000;
var axios = require('axios');
var util = require('util');
var fs = require('fs');

/** 
 * Config General
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var fic_index = process.cwd() + "/build/index.html";

if (!fs.existsSync(fic_index)) {
    console.log(fic_index + " not found");
}
app.use(express.static('build'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('*', function (req, res) {
    console.log("/*");
    res.sendFile(fic_index);
});

app.post('*', function (req, res) {

    console.log('param = ' + JSON.stringify(req.body));

           axios.post('http://localhost:8080/AllezOusteServlet/'+req.url, 
            req.body)
            .then(res2 => {
                console.log(JSON.stringify(res2.data));
                res.send(res2.data);
            })

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
router.get('/voyage',login.voyage);
router.get('/destinations',login.destinations);
app.use('/api', router);
app.listen(port);

