// npm init : package.json - This is a node project
// npm i express : To install expressJs package - project comes to know that we are using express
// We finally use express

const express = require("express");
const mongoose = require("mongoose");
const app = express(); // transfered the express file to the local variable
require('dotenv').config();
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require("passport");
const User  = require("./models/User");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const playlistRoutes = require("./routes/playlist");
const cors = require("cors");
const port = 8800;

app.use(cors());
app.use(express.json()); // to display the body part of the express packet

// connect mongodb with node app
// mongoose.connect() takes 2 arguments : 1st which db to connect to (db url), 2nd is connection options
mongoose.connect("mongodb+srv://ronakagarwal:" + 
    process.env.CHECK+ 
    "@cluster0.99pdn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",)
    .then(() => {
        console.log("Connected to MongoDB Atlas!");
    })
    .catch((err) => {
        console.error("Error while connecting: ", err);
    });

// setup passport-jwt 
// jwt is JSON web token
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;

// Updated passport JWT strategy to use async/await
passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      try {
        const user = await User.findOne({ _id: jwt_payload.identifier });
  
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
          // Optionally, you can create a new account here if needed.
        }
      } catch (err) {
        return done(err, false);
      }
    })
  );  

// API : GET type : / : return text "Hello world"
app.get("/", (req, res) => {
    // req contains all data for the request
    // res contains all data for the response
    res.send("Hello World");
});

// Use auth and song routes
app.use("/auth", authRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);

// We need to tell express that our server will run on localhost : 8800
app.listen(port, () => {
    console.log("App is running on port " + port);
});
