/**
 * @author ismail <is.tmdg86@gmail.com>
 */

var mongoose = require('mongoose');  

var RideSchema = new mongoose.Schema({  
    name: String,
    rideNumber: String,
    rideType: String, // car, bike
    status: { type: Number, default: 0 }, // 0: idle, 1: picked, 2: cancled
    statusDescription: String,
});

mongoose.model('Rides', RideSchema);
module.exports = mongoose.model('Rides');