let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let User = require('../models/User.js');

//TODO jwt

/* Post authorize user for login. */
router.post('/', function(req, res, next) {

    User.findOne({'username': req.body.username})
        .exec(function (err, user) {
            res.set('Content-Type', 'application/json')
                .status(200)
                .json(user);
        });
        // TODO Jwt handling

});

module.exports = router;
