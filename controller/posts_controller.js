const post=require('../model/post')

module.exports.create=function(req,res){
    post.create({
        content:req.body.content,
        user:req.user._id
    }, function(err,post){
        if(err){ console.log('error in creating post');
    return;
}
return res.redirect('back');
    });
    }
//  idk wrror kyu ara h ye, like there is no async here as i checked escalating ur doubt,  ok  
