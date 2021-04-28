const express=require('express');
const router=express.Router();

const usersController=require('../controller/users_controller');

router.get('/profile',usersController.profile);
// 
router.get('/sign-up', usersController.signup); // changed from signUP to signup as defined in the users_controller 
router.get('/sign-in', usersController.signIn);



router.post('/create',usersController.create);
//here u also have to create route for create-session and call controller
//I think in next lecuter it will be there
//is there anything u want to ask , no thank you for this, we can resolve this now

module.exports=router;