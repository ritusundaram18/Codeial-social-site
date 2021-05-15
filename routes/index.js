const express=require('express');
const router=express.Router();

const homeController=require('../controller/home_controller');

console.log('router loaded');

router.get('/', homeController.home);
router.use('/users',require('./users'));
router.use('/posts',require('./posts'));

// for any futher routes access from here
//route.use('/router name',require('./routerfile));

 module.exports=router;