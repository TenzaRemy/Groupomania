const mongoose = require('mongoose');
// package qui permet de s'inscrire avec un Email unique
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  pseudo: { type: String, required: true, minLength: 2, maxLength: 12},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);