/**
 * @author Ismail <is.tmdg86@gmail.com>
 */

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var VerifyToken = require(__root + 'configs/VerifyToken');

router.use(bodyParser.urlencoded({ extended: true }));
var Transaction = require('../models/Transaction');
var Ride = require('../models/Ride');

// Request new ride
router.post('/', VerifyToken, function (req, res) {
    Transaction.create({
        customerId : req.body.customerId,
        rideId : req.body.rideId,
    },
    function (err, trx) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        Ride.findByIdAndUpdate(
            req.body.rideId,
            {'$set': {'status': req.body.status}},
            function (err, ride) {
                if (err) return res.status(500).send("There was a problem updating the ride." + err);
                res.status(200).send(trx);
        });
    });
});

// get ride status
router.get('/:id', VerifyToken, function (req, res) {
    Transaction.findById(req.params.id, function (err, ride) {
        if (err) return res.status(500).send("There was a problem finding the ride.");
        if (!ride) return res.status(404).send("No ride found.");
        res.status(200).send(ride);
    });
});

// Update transaction status
router.put('/:id', VerifyToken, function (req, res) {
    Transaction.findByIdAndUpdate(req.params.id, req.body.status, {new: true}, function (err, ride) {
        if (err) return res.status(500).send("There was a problem updating the ride.");
        res.status(200).send(ride);
    });
});

module.exports = router;