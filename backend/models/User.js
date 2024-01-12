// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  password: String,
  mobileNumber: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
