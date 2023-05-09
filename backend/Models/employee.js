const mongoose = require('mongoose');

const EmployeeSchema = {
    empName : {
        type : String,
        required : true
    },
    empPhone : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    address : String
}

module.exports = mongoose.model('emp', EmployeeSchema);