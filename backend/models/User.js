const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  phone: String,
  course: String,
  password: String
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
