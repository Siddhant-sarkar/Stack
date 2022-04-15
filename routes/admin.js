const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

router.get('/login',adminController.adminLogin);

router.post('/authenticate',adminController.adminAuthenticate);
module.exports = router;