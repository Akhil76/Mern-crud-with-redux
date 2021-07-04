const asyncHandler = require('express-async-handler');
const PostModel = require('../models/Post');


const deletePost = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    await PostModel.findByIdAndRemove(id).exec();

    res.send('The post is successfully deleted.');
})

module.exports = deletePost;