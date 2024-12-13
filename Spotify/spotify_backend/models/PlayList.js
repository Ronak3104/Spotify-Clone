const mongoose = require("mongoose");
// mongoose is used to connect nodeJS to mongodb

// How to create a model
// Step 1 : require mongoose
// Step 2 : Create a mongoose schema {structure of a user}
// Step 3 : Create a model

const PlayList = new mongoose.Schema({
    name : {
        type:String,
        required : true,
    },
    thumbNail: {
        type : String,
        required : true,
    },
    owner : {
        type : mongoose.Types.ObjectId,
        ref : "User",
    },
    // 1. Which songs playlist contains
    songs :[{
        type : mongoose.Types.ObjectId,
        ref : "Song",
    },],
    // 2. Which user created the playlist
    collaborators : [{
        type : mongoose.Types.ObjectId,
        ref : "User",
    },],
    
});

const PlayListModel = mongoose.model("PlayList",PlayList); 
// two arguments first is name of the collection and second is schema
module.exports = PlayListModel;  // we use this to export full model to be implemented whenever required