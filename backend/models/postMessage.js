import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: { type: String, maxLength: 160 },
    selectedFile: String,
    cName : String ,
    creator : String ,
    cId : String ,
    likes: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
