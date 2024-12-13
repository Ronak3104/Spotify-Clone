const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { getToken } = require("../utils/helpers"); 

// TO REGISTER USER
// we are using async beacuse await is a asynchronous function
router.post("/register",async (req,res) => {
    //This code will run when the register api is called as a POST request.
    // My req.body will be of the format {phonenumber.password,firstName,lastName, username}
    const {email,password,firstName,lastName,username} = req.body;

    // STEP 2 : Does a user with this email already exists ? If yes, we throw an error
    const user = await User.findOne({email :email});
    if(user) {
        // status code by deafult is 200
        return res.status(403).json({error: "a user already exists with this email"})
    }

    // This is a valid request
    // Step 3 : Create a new user in the db
    // Step 3.1 : We do not store password in plain text
    // we convert the plain text password to a hash
    //xyz --> asdaadsjhbjjbxcvsdf
    // Hash of xyz depends on 2 parameters.
    // If  we keep both the parameters same, xyz will return same hash.
    
    const hashedPassword = await bcrypt.hash(password,10); 
    const newUserData = {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        username,
    };
    const newUser = await User.create(newUserData);

    // Step 4 : We want to create the token to retuen to the user
    const token = await getToken(email,newUser);
    

    // Step 5 : Return the token to the user
    const userToReturn = {...newUser.toJSON(),token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
});

router.post("/login", async (req,res)=> {

    // Step 1 : Get email and password sent by user from req.body
    const {email, password} = req.body;

    // Step 2 : Check if a user with email exists. If not, the credentials are invaild.
    const user = await User.findOne({email: email});
    if (!user) {
        return res.status(403).json({err: "Invalid credentials"});
    }

    console.log(user);

    // Step 3 : If the user exists, check if the password is correct. If not, the credential are invalid.
    // We cannot do if(password(xyz) == user.password(xyz converted to hash))
    // We need to convert the password to a hash and then compare it with the user's password
    // bcrypt.compare enabled us to compare 1 password in plain text (password from req.body) to a hashed password(the one in our db) securely
    const isPasswordValid = await bcrypt.compare(password, user.password);
    // This will be true or false
    if (!isPasswordValid) {
        return res.status(403).json({err: "Invaid credentials"});
    } 

    // Step 4 : If the credentials are correctt, return a token to the user.
    const token = await getToken(user.email, user);
    const userToReturn = {...user.toJSON(), token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
});
module.exports = router;