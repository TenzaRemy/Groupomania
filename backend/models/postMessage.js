import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: { type: String, maxLength: 160 },
    selectedFile: String,
    Cname : String ,
    creator : String ,
    Cid : String ,
    likes: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
