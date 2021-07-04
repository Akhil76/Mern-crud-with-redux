const express = require('express');
const displaypost = require('../controllers/displaypost');
const router = express.Router();



router.get('/get',displaypost);


module.exports = router;