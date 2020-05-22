const express = require('express');
const router = express.Router();
const { getUrl } = require('../controllers/Search.controller');

router
.route('/')
.post(getUrl)


module.exports = router;