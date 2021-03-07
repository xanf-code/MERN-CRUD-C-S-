const mongoose = require("mongoose");

const crudSchema = mongoose.Schema({
    Name : {
        type : String,
        required : true,
    },
    College : {
        type : String,
        required : true,
    },
    USN : {
        type : String,
        required : true,
    },
    Address : {
        type : String,
        required : true,
    },
    Date : {
        type : Date,
        default : new Date(),
    }
});

const data = mongoose.model("StudentData" , crudSchema);
module.exports = data;