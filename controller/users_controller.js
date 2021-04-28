const User=require('../model/user');

module.exports.profile=function(req,res){
//    res.render('<h1>user profile</h1>');
    // return res.render('home', {
    //     title:"Home"
    return res.render('user_profile', {
        title:'User Profile'
    });
}

//render the sign-up page
module.exports.signup=function(req,res){
    return res.render('user_sign_up', {
        title:"Codeial |Sign Up"
    })
}

//render the signin page

module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:"codeial|Sign In"
    })
}

//get the sign up  data
// module.exports.create=function(req,res){
//     if(req.body.password !=req.body.confirm_password){
//         return res.redirect('back');
//     }
//     user.findOne({email:req.body.email},function(err,user){
//         if(err){console.log('error in finding user in signing up'); return}

//         if(!user){
//             user.create(req.body, function(err,user){
//                 if(err){console.log('error in creating user while signing up'); return}

//                 // return res.redirect('/users/sign-in')
//                 return res.redirect('back');
//             })
//         }
//     });
//     }
//     console.log("I ve reached here");


module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('/users/sign-in');
        }
        
    });
}


//sign in and create a session for the user
// module.exports.create=function(req,res){
//     //TODO LATER
// }
