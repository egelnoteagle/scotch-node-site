// require express
var express = require('express');
var path = require('path');
// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route for homepage
router.get('/', function(req, res) {
    res.render('pages/home');
});

// route for our about page
router.get('/about', function(req, res) {
    var users = [{
            name: 'Holly',
            email: 'holly@scotch.io',
            avatar: 'http://placekitten.com/100/100'
        },
        {
            name: 'Derek',
            email: 'derek@scotch.io',
            avatar: 'http://placekitten.com/300/400'
        },
        {
            name: 'Dave',
            email: 'dave@scotch.io',
            avatar: 'http://placekitten.com/600/600'
        },
        {
            name: 'Luke',
            email: 'luke@scotch.io',
            avatar: 'http://placekitten.com/700/700'
        },
    ];
    res.render('pages/about', {users: users});
});

// routes for contact page
router.get('/contact', function(req, res) {
    res.render('pages/contact');
});
router.post('/contact', function() {
  res.send('Thanks for contacting us, ' + req.body.name + '! We will respond shortly!');
});
