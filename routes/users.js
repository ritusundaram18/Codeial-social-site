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

router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), usersController.createSession);


router.get('/sign-out', usersController.destroySession);


router.get('/auth/google',passport.authenticate('google', {scope:['profile', 'email']}));
router.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/users/sign-in'}), usersController.createSession)

module.exports=router;