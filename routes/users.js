const express=require('express');
const router=express.Router();
const passport=require('passport');

const usersController=require('../controller/users_controller');

// router.get('/profile',usersController.profile);
router.get('/profile/:id',passport.checkAuthentication,usersController.profile);

router.post('/update/:id',passport.checkAuthentication,usersController.update);


router.get('/sign-up', usersController.signup); // changed from signUP to signup as defined in the users_controller 
router.get('/sign-in', usersController.signIn);



router.post('/create',usersController.create);
//here u also have to create route for create-session and call controller
//I think in next lecuter it will be there
//is there anything u want to ask , no thank you for this, we can resolve this now

//use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), usersController.createSession);


router.get('/sign-out', usersController.destroySession);




module.exports=router;