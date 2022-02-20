
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  Email: String,
  Lastname: String,
  Firstname: String,
  Age: String,
}, { timestamps: true })

module.exports = mongoose.model('users', usersSchema)

