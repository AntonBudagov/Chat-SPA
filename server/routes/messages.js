var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Message = require('../models/Message.js');
// const messages = [
//     {
//         nickName: 'Ivan',
//         message: 'Message from Ivan',
//         created: Date.now()
//     },
//     {
//         nickName: 'Ivan2',
//         message: 'Message from Ivan',
//         created: Date.now()
//
//     }
// ];

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
        res.status(200).set('Content-Type', 'application/json').status(200).send('ok');
    })

});

module.exports = router;
