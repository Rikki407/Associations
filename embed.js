var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");
var postSchema = mongoose.Schema({
    title : String,
    content : String
});
var Posts = mongoose.model("posts",postSchema);


var userSchema = mongoose.Schema({
    email : String,
    name : String,
    posts : [postSchema]
});
var Users = mongoose.model("users",userSchema);
// var newUser= new Users({
//    email : "hermione@hogwarts.edu",
//     name : "Hermione Granger"
// });
//
// newUser.posts.push({
//     title : "How to bre a polyjuice potion",
//     content : "Just kidding ! Go to potion class to learn it"
// });
//
// newUser.save(function (err , savedUser) {
//    if(err){
//        console.log(err);
//    } else {
//        console.log(savedUser);
//    }
// });
Users.findOne({name : "Hermione Granger"},function (err , foundUser) {
    if(err){
        console.log(err);
    }else {
        foundUser.posts.push({
            title : "3 things I really hate",
            content : "Voldemort , Voldemort, Voldemort"
        });
        foundUser.save(function (err, savedUser) {
            if(err){
                console.log(err);
            }else {
                console.log(savedUser);
            }
        });
    }
});