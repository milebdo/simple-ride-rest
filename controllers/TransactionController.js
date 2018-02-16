/**
 * @author Ismail <is.tmdg86@gmail.com>
 */

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var VerifyToken = require(__root + 'configs/VerifyToken');

router.use(bodyParser.urlencoded({ extended: true }));
var Transaction = require('../models/Transaction');

// Request new ride
router.post('/', function (req, res) {
    Transaction.create({
        customerId : req.body.customerId,
        rideId : req.body.rideId,
    }, 
    function (err, trx) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(trx);
    });
});

// get ride status
router.get('/:id', function (req, res) {
    Transaction.findById(req.params.id, function (err, ride) {
        if (err) return res.status(500).send("There was a problem finding the ride.");
        if (!ride) return res.status(404).send("No ride found.");
        res.status(200).send(ride);
    });
});

// Update transaction status
// Added VerifyToken middleware to make sure only an authenticated user can put to this route
router.put('/:id', function (req, res) {
    Transaction.findByIdAndUpdate(req.params.id, req.body.status, {new: true}, function (err, ride) {
        if (err) return res.status(500).send("There was a problem updating the ride.");
        res.status(200).send(ride);
    });
});

module.exports = router;