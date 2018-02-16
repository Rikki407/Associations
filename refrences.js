var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var postSchema = mongoose.Schema({
    title : String,
    content : String
});

var PostsModel = mongoose.model("posts",postSchema);

var userSchema = mongoose.Schema({
    name : String,
    email : String,
    posts : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "posts"
    }]
});

var Users = mongoose.model("users",userSchema);
Users.create({
    name : "Rishab",
    email : "ranlam2304@gmail.com"
});

PostsModel.create({
    title : "God let this work",
    content : "fghjklbldfghjkadfghjkh"
},function (err, post) {
    Users.findOne({email : "ranlam2304@gmail.com"},function (err, user) {
       if(err){
           console.log(err);
       } else{

           user.posts.push(post._id);
           user.save(function (err, recUser) {
               if(err){
                   console.log(err);
               }else{
               }
           });
       }
    });
});

Users.findOne({email : "ranlam2304@gmail.com"}).populate("posts").exec(function (err, user) {
    if(err){
        console.log(err);
    }else {
        console.log(user);
    }
});