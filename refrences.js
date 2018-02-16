var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_3");

var Posts = require("./models/posts.js");
var Users = require("./models/users.js");

// Users.create({
//     name : "ranlama",
//     email : "ranlam2314@gmail.com"
// });

Posts.create({
    title : "God let this work pt 2",
    content : "haha haha haha"
},function (err, post) {
    Users.findOne({email : "ranlam2314@gmail.com"},function (err, user) {
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

Users.findOne({email : "ranlam2314@gmail.com"}).populate("posts").exec(function (err, user) {
    if(err){
        console.log(err);
    }else {
        console.log(user);
    }
});