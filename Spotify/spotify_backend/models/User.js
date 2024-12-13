const mongoose = require("mongoose");
// mongoose is used to connect nodeJS to mongodb

// How to create a model
// Step 1 : require mongoose
// Step 2 : Create a mongoose schema {structure of a user}
// Step 3 : Create a model

const User = new mongoose.Schema({
    firstName : {
        type:String,
        required : true,
    } ,
    lastName : {
        type : String,
        required : false, // by default required if false
    },
    password:{
        type:String,
        required:true,
        private:true
    },
    email : {
        type : String,
        required : true,
    },
    username : {
        type : String,
        required : true,
    },
    likedSongs : {
        // We will change this to array later
        type : String,
        default : "",
    },
    likedPlaylists : {
        // We will change this to array later
        type : String,
        default : "",
    },
    subscribedArtists : {
        // We will change this to array later
        type : String,
        default : "",
    },

});

const UserModel = mongoose.model("User",User);
// two arguments first is name of the collection and second is schema
module.exports = UserModel;  // we use this to export full model to be implemented whenever required