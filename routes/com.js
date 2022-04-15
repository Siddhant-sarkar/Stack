const express = require('express');
const router = express.Router();
const comController = require('../controllers/com')

router.get('/',comController.home);

module.exports = router;
