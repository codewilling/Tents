var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose")

var userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: {type: String, unique: true, required: true},
    avatar: {type: String, default: "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1c8cc988efddbda8746281871c0c8bf&auto=format&fit=crop&w=959&q=80"},
    email: {type: String, unique: true, required: true},
    password: String,
    isAdmin: { 
        type: Boolean, 
        default: false},
    createdAt: {
        type: Date, 
        default: Date.now
        },
    resetPasswordToken: String,
    resetTokenExpires: Date
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);