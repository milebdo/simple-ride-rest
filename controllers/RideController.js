/**
 * @author Ismail <is.tmdg86@gmail.com>
 */

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var VerifyToken = require(__root + 'configs/VerifyToken');

router.use(bodyParser.urlencoded({ extended: true }));
var Ride = require('../models/Ride');

// Register new ride
router.post('/', VerifyToken, function (req, res) {
    Ride.create({
            name : req.body.name,
            rideNumber : req.body.number,
            rideType : req.body.type,
        }, 
        function (err, ride) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(ride);
        });
});

// get all rides
router.get('/', VerifyToken, function (req, res) {
    Ride.find({'status': 0}, function (err, rides) {
        if (err) return res.status(500).send("There was a problem finding the rides.");
        res.status(200).send(rides);
    });
});

// get ride status
router.get('/:id', VerifyToken, function (req, res) {
    Ride.findById(req.params.id, function (err, ride) {
        if (err) return res.status(500).send("There was a problem finding the ride.");
        if (!ride) return res.status(404).send("No ride found.");
        res.status(200).send('ride-status:' + ride.status);
    });
});

// delete ride
router.delete('/:id', VerifyToken, function (req, res) {
    Ride.findByIdAndRemove(req.params.id, function (err, ride) {
        if (err) return res.status(500).send("There was a problem deleting the ride.");
        res.status(200).send("Rider: "+ ride.name +" was deleted.");
    });
});

// Update ride data
router.put('/:id', VerifyToken, function (req, res) {
    Ride.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, ride) {
        if (err) return res.status(500).send("There was a problem updating the ride.");
        res.status(200).send(ride);
    });
});

module.exports = router;