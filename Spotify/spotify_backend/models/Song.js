const mongoose = require("mongoose");
// mongoose is used to connect nodeJS to mongodb

// How to create a model
// Step 1 : require mongoose
// Step 2 : Create a mongoose schema {structure of a user}
// Step 3 : Create a model

const Song = new mongoose.Schema({
    name : {
        type:String,
        required : true,
    },
    thumbNail: {
        type : String,
        required : true,
    },
    track : {
        type : String,
        required : true,
    },
    artist : {
        type : mongoose.Types.ObjectId,
        ref : "User",
    },
});

const SongModel = mongoose.model("Song",Song);
// two arguments first is name of the collection and second is schema
module.exports = SongModel;  // we use this to export full model to be implemented whenever required