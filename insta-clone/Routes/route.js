const {SignUp,Login} = require('../Control_Room/controller');
const express = require('express');
const router = express.Router();

router.post('/Sign_Up',SignUp);
router.post('/login',Login);




module.exports=router;