
const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors');
const createPost = require('./routers/createPost');
const deletePost = require('./routers/deletePost');
const displaypost = require('./routers/displaypost');
const editPost = require('./routers/editPost');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/',createPost);

app.use('/',displaypost);
app.use('/',editPost);
app.use('/',deletePost);
//--------Server Port defining and Database connection------------

PORT = process.env.PORT || 3001;
Db_url = "mongodb+srv://akhil:akhil1234@cluster0.dvlfe.mongodb.net/blogsite?retryWrites=true&w=majority";

app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`)
    mongoose.connect(Db_url,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify: false
    }).then(()=>{
        console.log('Database is connected.')
    }).catch(()=>{
        console.log('Database is not connected.')
    });
});
//-------------------End------------------------------------------


