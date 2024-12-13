const express = require("express");
const router = express.Router();
const passport = require("passport");
const Song = require("../models/Song");
const User = require("../models/User");

// POST route to create a song
router.post("/create", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const { name, thumbNail, track } = req.body;
    
    // Check if all required fields are provided
    if (!name || !thumbNail || !track) {
        return res.status(400).json({ err: "All fields (name, thumbNail, track) are required to create a song." });
    }

    try {
        const artist = req.user._id;
        const songDetails = { name, thumbNail, track, artist };
        
        // Create the song in the database
        const createdSong = await Song.create(songDetails);
        
        // Return the created song with status 201 (Created)
        return res.status(201).json(createdSong);
    } catch (err) {
        // Handle any server-side errors during song creation
        return res.status(500).json({ err: "Server error. Could not create song." });
    }
});

// GET route to get all songs published by the current user
router.get("/get/mysongs", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const currentUser = req.user;
        
        // Find all songs where the artist is the current user
        const songs = await Song.find({ artist: req.user._id }).populate("artist");
        
        // Return the songs with status 200 (OK)
        return res.status(200).json({ data: songs });
    } catch (err) {
        // Handle any server-side errors during song fetching
        return res.status(500).json({ error: "Server error. Could not retrieve songs." });
    }
});


// Get router to get all songs  any artist has published
// We will send the artist id and we want to see all songs that artist has published.
router.get("/get/artist/:artistId", passport.authenticate("jwt", {session: false}), async (req, res)=>{
    const {artistId} = req.params;
    // We can check if the artist deos not exist
    const artist = await User.findOne({_id: artistId});
    // ![] = false
    // !null = true
    // !undefined = true
    if(!artist){
        return res.status(404).json({error: "Artist not found."})
    }
    const songs = await Song.find({artist: artistId});
    return res.status(200).json({data: songs});
});

// Get route to get a single song by name
router.get("/get/songname/:songName", passport.authenticate("jwt", {session:false}), async(req, res)=>{
    const {songName} = req.params;

    //name : songName --> exactt name matching. Vanilla, Vanila
    // Pattern matching instaed of direct name matching.
    
    const songs = await Song.find({name: songName}).populate("artist");
    return res.status(200).json({data: songs});
});


module.exports = router;
