const { SignUp, Login ,emailVerification ,userVerification ,updatePassword,getUsernames} = require("../Control_Room/controller");
const express = require("express");
const router = express.Router();

router.post("/SignUp", SignUp);
router.post("/login", Login);
router.post('/verifyemail',emailVerification)
router.post('/forgetpassword',userVerification)
router.post('/updatepassword',updatePassword)
router.get('/getusernames/:mail',getUsernames)

module.exports = router;
