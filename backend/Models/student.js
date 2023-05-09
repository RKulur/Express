const mongoose = require('mongoose');

const { Schema } = mongoose;

const StudentSchema = new Schema({
    name:{
        type : String,
        required: true,
    },
    phone : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    address : {
        type : String,
    },
    date : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Student',StudentSchema);