/**
 * @author ismail <is.tmdg86@gmail.com>
 */

var mongoose = require('mongoose');  

var TransactionSchema = new mongoose.Schema({  
    transactionDate: { type: Date, default: Date.now },
    customerId: String,
    rideId: String,
});

mongoose.model('Transactions', TransactionSchema);
module.exports = mongoose.model('Transactions');