let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Message = require('../models/Message.js');


/* GET message listing. */
router.get('/', function(req, res, next) {

    Message.find({})
        .exec(function (err, messages) {
            res.set('Content-Type', 'application/json')
                .status(200)
                .json(messages);
    });

});

/* POST message. */
router.post('/', function(req, res, next) {
    // messages.push(req.body);
    // res.status(200)
    //     .set('Content-Type', 'application/json')
    //     .status(200).send('end');
    Message.create(req.body, function (err, messages) {
        res.status(200).json({"response": "ok"});
    })

});

module.exports = router;
