const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/login',userController.userLogin);

router.post('/authenticate',userController.userAuthenticate);
router.get('/dashboard',userController.userDashboard);
// router.
module.exports = router;
