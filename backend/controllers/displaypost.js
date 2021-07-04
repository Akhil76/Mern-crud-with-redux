const asyncHandler = require('express-async-handler');
const PostModel = require('../models/Post');


const displaypost = asyncHandler(async(req,res)=> {
    PostModel.find({},(err, result) =>{
        if(err){
            res.send(err);
        } else{
            res.send(result);
        }
    });
});

module.exports = displaypost;