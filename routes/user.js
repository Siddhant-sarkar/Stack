const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/login',userController.userLogin);

router.post('/authenticate',userController.userAuthenticate);
router.get('/dashboard',userController.userDashboard);
router.post('/addComplaint',userController.addComplaint);
router.post('/resolve',userController.resolveComplaints);
module.exports = router;
