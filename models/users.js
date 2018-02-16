var mongoose = require("mongoose");


var userSchema = mongoose.Schema({
    name : String,
    email : String,
    posts : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "posts"           // "posts" is the name of the collection we want to refer to
    }]
});

module.exports = mongoose.model("users",userSchema);
