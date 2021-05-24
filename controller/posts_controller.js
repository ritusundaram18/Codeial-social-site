const Post = require('../model/post');
// const post=require('../model/post');
const Comment=require('../model/comment');

module.exports.create= async function(req,res){
    try{
    await Post.create({
        content:req.body.content,
        user:req.user._id
    });
    req.flash('success','post published');
    return res.redirect('back');
}catch(err){
    //  console.log('Error',err);
    req.flash('error','err');
    return res.redirect('back');
    }
}
module.exports.destroy = async function(req, res){

    try{
        let post = await Post.findById(req.params.id);

        if (post.user == req.user.id){
            post.remove();

            await Comment.deleteMany({post: req.params.id});

            req.flash('success', 'post and associated comment deleted');
            return res.redirect('back');
        }else{
            req.flash('error', 'you can not delete this post');
            return res.redirect('back');
        }

    }catch(err){
        // console.log('Error', err);
        req.flash('error', err);
        return res.redirect('back');
    }
    
}