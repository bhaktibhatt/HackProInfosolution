const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    contactnumber : {
        type : Number,
        required : true
    },
    education : {
        type : String,
        required : true
    },
    modeofinstruction : {
        type : String,
        required : true
    },
});

//! Here below V "registrations" should be the collection name in the DB cluster
module.exports = mongoose.model("registrations", userSchema)
