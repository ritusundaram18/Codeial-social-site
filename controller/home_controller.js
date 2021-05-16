const Post=require('../model/post');
module.exports.home=function(req,res){
    // console.log(req.cookies);
    // return res.end('<h1>Express is up for codeial</h1>')
    // Post.find({},function(err,posts){
    //     return res.render('home', {
    //         title:"Codeial | Home",
    //         posts:posts
    // });
    // });
        Post.find({}).populate('user').exec(function(err,posts){
            console.log(posts)
            return res.render('home', {
                       title:"Codeial | Home",
                         posts:posts
        });
    })
}


