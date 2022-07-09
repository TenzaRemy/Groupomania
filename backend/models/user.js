const mongoose = require('mongoose');
// package qui permet de s'inscrire avec un Email unique
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  pseudo: { type: String, required: true, minLength: 2, maxLength: 16},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String, default: 'localhost:5000/images/pp.png' },
  isAdmin: { type: Boolean, default: false},
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);