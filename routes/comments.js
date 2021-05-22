const express=require('express');
const router=express.Router();
const passport=require('passport');


const commentsController=require('../controller/comments_controller');


router.post('/create',passport.checkAuthentication, commentsController.create);
router.get('/destroy/:id',passport.checkAuthentication,commentsController.destroy);

module.exports=router;


//show me the form which is not visible , ok form for both post and comment disappered
