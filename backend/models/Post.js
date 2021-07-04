// Post Model
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    PostName:{
        type: String,
        required: true,
    },
    Catagory:{
        type: String,
        required: true,
    },
    PostContent:{
        type: String,
        required: true,
    },
    Date:{
        type: Date,
        default: new Date(),
    }
});

const Post = mongoose.model("Post",PostSchema)
module.exports = Post;