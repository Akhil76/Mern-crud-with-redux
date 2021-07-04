
const asyncHandler = require('express-async-handler');
const PostModel = require('../models/Post');

const getcontroller = asyncHandler(async(req,res)=>{
    
    const {PostName,Catagory,PostContent} = req.body;
    const Post = new PostModel({
        PostName,
        Catagory,
        PostContent
    });
    try{
        await Post.save();
        res.send("Data inserted");
    }catch(err){
        console.log(err);
    }
});


module.exports = getcontroller;