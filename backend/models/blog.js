const mongoose = require('mongoose'); 

const blogSchema = mongoose.Schema({ 
  userId: { type: String, required: true},
  name: { type: String, required: true },
  title: { type: String, required: true},
  description: { type: String, required: true },    
  imageUrl: { type: String, required: false},
  likes: { type: Number, required: true},
  usersLiked: { type: Array, required: true},
});

module.exports = mongoose.model('sauce', blogSchema);