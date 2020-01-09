const express = require('express');
const router = express.Router();

const post_controller = require('../controllers/post.controller');

router.get('/info', post_controller.info);

module.exports = router;