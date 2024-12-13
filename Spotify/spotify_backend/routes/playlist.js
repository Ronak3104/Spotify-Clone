const express = require("express");
const passport = require("passport");
const Playlist = require("../models/PlayList");
const User = require("../models/User");
const Song = require("../models/Song");

const router = express.Router();

// Route 1 : Create a playlist
router.post("/create", passport.authenticate("jwt", {session: false}), async(req, res)=>{
    const currentUser = req.user;
    const {name, thumbNail, songs} = req.body;
    if (!name || !thumbNail || !songs){
        return res.status(301).json({err: "Insufficient data"});
    }
    const playlistData = {
        name , 
        thumbNail, 
        songs, 
        owner: currentUser._id, 
        collaborators: [],};
    const playlist = await Playlist.create(playlistData);
    res.status(200).json({message: "Playlist created successfully", playlist});
});

// Route 2 : Get a playlist by id
// We will get a playlist ID as a route parameter and we will return the playlist having that ID
// /something/something2 --> should exactly match 
// If we are doing /something/:something2 (focus on the :) --> this name something2 is now a variable to which we can assign any value
// If we call anthing of the format /playlist/get/anthing --> this api is called
// If you call /playlist/get/asdaasdfs, the playlistId variable gets assigned the value asdaasdfs
router.get("/get/playlist/:playlistId", passport.authenticate("jwt", {session: false}), async (req, res)=>{
    // This concept is called req.params
    const playlistId = req.params.playlistId;
    // We are using the find method of the model to find the playlist with the given ID
    const playlist = await Playlist.findOne({_id: playlistId}).populate({
        path:"songs",
        populate: {
            path: "artist",
        }
    });
    if(!playlist){
        return res.status(301).json({err: "Invalid ID"});
    }
    return res.status(200).json(playlist);
});

// Get all playlist made by me.
router.get("/get/me", passport.authenticate("jwt", {session: false}), async(req,res)=>{
    const artistId = req.user._id;

    const playlists = await Playlist.find({owner: artistId}).populate("owner");
    return res.status(200).json({data: playlists});
});

// Get all playlist made by an artist.
router.get("/get/artist/:artistId", passport.authenticate("jwt", {session: false}), async(req,res)=>{
    const artistId = req.params.artistId;

    // We can do check if the artist with the given artist Id exists
    const artist = await User.findOne({_id: artistId});
    if(!artist){
        return res.status(304).json({err: "Invalid Artist ID"});
    }

    const playlists = await Playlist.find({owner: artistId});
    return res.status(200).json({data: playlists});
});

// Add a song to a playlist
router.post("/add/song", passport.authenticate("jwt", {session:false}), async (req,res)=>{
    const currentUser = req.user;
    const {playlistId, songId} = req.body;
    // Step 0 : Get the playlist if valid
    const playlist = await Playlist.findOne({_id: playlistId});
    if(!playlist){
        return res.status(304).json({err: "Playlist does not exist"});
    }

    // Step 1 : Check if currentUser owns the playlist or is a collaborator
    if (!playlist.owner.equals(currentUser._id) && !playlist.collaborators.includes(currentUser._id)){
        return res.status(400).json({err: "Not allowed"});
    }
    // Step 2 : Check if the song is a valid song
    const song = await Song.findOne({_id: songId});
    if(!song){
        return res.status(304).json({err: "Song does not exist"});
    }
    // Step 3 : We can now simply add the song to the playlist
    playlist.songs.push(songId);
    await playlist.save();

    return res.status(200).json(playlist);
});

module.exports = router;
