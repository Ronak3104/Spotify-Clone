const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");

exports={};

exports.getToken = async(email,user) => {
    const token = jwt.sign({identifier : user._id},process.env.SECRET_KEY);
    return token;
};

module.exports = exports;