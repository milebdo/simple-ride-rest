/**
 * @author ismail <is.tmdg86@gmail.com>
 */

var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String
});

mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');