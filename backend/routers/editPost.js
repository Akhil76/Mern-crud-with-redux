const express = require('express');
const router = express.Router();
const editPost = require('../controllers/editPost');



router.put('/update/:id', editPost);

module.exports = router;