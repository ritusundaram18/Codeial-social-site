const express=require('express');
const router=express.Router();
const passport=require('passport');



const postsController=require('../controller/posts_controller');


router.post('/create',passport.checkAuthentication, postsController.create);
router.get('/destroy/:id', passport.checkAuthentication,postsController.destroy);

module.exports=router;


//its running // post spelling m galti ki thi mai? haan posts hona tha aur apne post likha tha aur home.ejs me chota sa syntax error 
// ky asyntacx error ki thi mai?
//