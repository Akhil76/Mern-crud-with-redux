const asyncHandler = require('express-async-handler');
const { Mongoose } = require('mongoose');
const PostModel = require('../models/Post');


const editPost = asyncHandler(async(req,res)=>{
    const {id }= req.params;
    PostModel.findByIdAndUpdate({_id:id},{$set:req.body},{new:true})
    .then(result=>{
        res.status(200).json({
            message: 'Updated successfully.',
            post:result
        })
    })
   
    .catch(error=>serverError(res,error))
})

module.exports = editPost;