const mongoose = require('mongoose'); 

const blogSchema = mongoose.Schema({ 
  title: { type: String, required: true},
  message: { type: String, required: true},    
  likes: { type: Number },
  dislikes: { type: Number},
  usersLiked: { type: Array},
  usersDisliked: { type: Array},
});

module.exports = mongoose.model('Blog', blogSchema);