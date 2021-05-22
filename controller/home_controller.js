const Post=require('../model/post');
const User=require('../model/user');


module.exports.home= async function(req,res){
    // console.log(req.cookies);
    // return res.end('<h1>Express is up for codeial</h1>')
    // Post.find({},function(err,posts){
    //     return res.render('home', {
    //         title:"Codeial | Home",
    //         posts:posts
    // });
    // });
    // populate the user of each post


    try{
        // populate the user of each post
       let posts = await Post.find({})
       .populate('user')
       .populate({
           path: 'comments',
           populate: {
               path: 'user'
           }
       });
   
       let users = await User.find({});

       return res.render('home', {
           title: "Codeial | Home",
           posts:  posts,
           all_users: users
       });

   }catch(err){
       console.log('Error', err);
       return;
   }
  
}










//In lectire
    //     Post.find({})
//     .populate('user')
//     .populate({
//         path: 'comments',
//         populate: {
//             path: 'user'
//         }
//     })
//     .exec(function(err, posts){

//         User.find({}, function(err, users){
//             return res.render('home', {
//                 title: "Codeial | Home",
//                 posts:  posts,
//                 all_users: users
//             });
//         });

       
//     })

// }


