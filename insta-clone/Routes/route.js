const { SignUp, Login ,emailVerification ,userVerification ,updatePassword,getUsernames,changeProfilePic,userEditing,getUserprofileAndNameforPost,uploadingPost,fetchAllPosts} = require("../Control_Room/controller");
const express = require("express");
const router = express.Router();

router.post("/SignUp", SignUp);
router.post("/login", Login);
router.post('/verifyemail',emailVerification)
router.post('/forgetpassword',userVerification)
router.post('/updatepassword',updatePassword)
router.get('/getusernames/:mail',getUsernames)
router.post('/updateProfilePic',changeProfilePic)
router.post('/userediting',userEditing);
router.get('/getuserprofileAndusername/:mail',getUserprofileAndNameforPost);
router.post('/uploadPost',uploadingPost);
router.get('/gettingAllPosts',fetchAllPosts);
module.exports = router;
