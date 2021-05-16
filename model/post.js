const mongoose=require('mongoose');


const postSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'        //mainae user likha tha ye User hoga , accha  ,bs yahi galti tha kya?aan bas yhi galti the aapne userschema ko User ke nam se export kra hai toh User ana tha not user,   accha ok , thank you no problem :)
},
//include the array of ids of all comment in this post schema itself
comments: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }
]
}, {
    timestamps:true
});


const Post=mongoose.model('Post',postSchema);
module.exports=Post;