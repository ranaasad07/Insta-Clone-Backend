const { SignUp, Login ,emailVerification ,userVerification ,updatePassword} = require("../Control_Room/controller");
const express = require("express");
const router = express.Router();

router.post("/SignUp", SignUp);
router.post("/login", Login);
router.post('/verifyemail',emailVerification)
router.post('/forgetpassword',userVerification)
router.post('/updatepassword',updatePassword)


module.exports = router;
