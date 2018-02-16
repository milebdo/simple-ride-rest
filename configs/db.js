/**
 * @author Ismail <is.tmdg86@gmail.com>
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/simpleride');
mongoose.Promise = global.Promise;