const { SignUp, Login ,emailVerification } = require("../Control_Room/controller");
const express = require("express");
const router = express.Router();

router.post("/SignUp", SignUp);
router.post("/login", Login);
router.get('/verifyemail',emailVerification)

module.exports = router;
