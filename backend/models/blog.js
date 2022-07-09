const mongoose = require('mongoose'); 

const blogSchema = mongoose.Schema({ 
  userId: { type: String, required: true},
  message: { type: String, required: true},    
  imageUrl: { type: String, required: false},
  likes: { type: Number, required: true},
  dislikes: { type:Array, required: true},
  usersLiked: { type: Array, required: true},
  usersDisliked: { type: Array, required: true},
});

module.exports = mongoose.model('Blog', blogSchema);