// require express
var express = require('express');
var path = require('path');
// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route for homepage
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// route for our about page
router.get('/about', function(req, res) {
    res.send('hello world, I am the about page');
});

// routes for contact page
router.get('/contact');
router.post('/contact');
