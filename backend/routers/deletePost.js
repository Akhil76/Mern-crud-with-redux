const express = require('express');
const deletePost = require('../controllers/deletePost');
const router = express.Router();

router.delete('/delete/:id', deletePost);


module.exports = router;