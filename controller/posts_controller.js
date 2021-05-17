const Post = require('../model/post');
// const post=require('../model/post');
const Comment=require('../model/comment');

module.exports.create=function(req,res){
    Post.create({
        content:req.body.content,
        user:req.user._id
    }, function(err,post){
        if(err){ console.log('error in creating post');
    return;
}
return res.redirect('back');
    });
    }
module.exports.destroy=function(req,res){
    Post.findById(req.params.id, function(err,post){
        //.id means converting the object id into string
        if(post.user==req.user.id){
            post.remove();
            Comment.deleteMany ({post: req.params.id}, function(err){
                return res.redirect('back');
            });
        }else{
            return res.redirect('back');
        }
    });
}
//show me the error