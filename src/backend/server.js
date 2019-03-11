var express = require('express');
var router = express.Router();

router.get('/',function(req,res) {
    res.send("Boujour le monde!!! Home page");
});

router.get('/about', function(req,res) {
    res.send('About me! My name is Malou Alleno');
});

module.exports = router;

var app = express();

app.route('/').get(function(req, res) {
    res.send("Bonjour Malou !");
    res.sendFile("testimport.html");
});

app.listen(9000)