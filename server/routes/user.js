let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let User = require('../models/User.js');

/* GET message listing. */
router.get('/', function(req, res, next) {

    User.find({})
        .exec(function (err, users) {
            res.set('Content-Type', 'application/json')
                .status(200)
                .json(users);
        });

});
/* GET USER BY ID. */
router.get('/:id', function(req, res, next) {
    User.find({'_id': req.params.id})
        .exec(function (err, messages) {
            res.set('Content-Type', 'application/json')
                .status(200)
                .json(messages);
        });
});

/* POST User. */
router.post('/', function(req, res, next) {
    User.create(req.body, function (err, user) {
        res.status(200).set('Content-Type', 'application/json').status(200).send('ok');
    })
});

/* Put Update User. */
router.put('/', function(req, res, next) {
    User.findByIdAndUpdate(req.body, function (err, user) {
        res.status(200).set('Content-Type', 'application/json').status(200).send('ok');
    })
});

module.exports = router;
