//import mongoose package and assignt it to mongoose variable we create
const mongoose = require('mongoose');

//create variable enter student details ,it add in to schema ex:student id,name
const Schema = mongoose.Schema;

const studentSchema = new Schema({

    name : {
        type : String,
        required: true
    },
    age: {
        type: Number,
        required:true
    },
    gender :{
        type : String,
        required :true
    },
    registration_num :{
        type : Number,
        required : true
    },
   
    address : {
        type : String,
        required : true
    }

})

// mongoose package have model function ....studentschema data send to student document .student document at data base
const Student = mongoose.model("Student",studentSchema);

// (importan one).. we need export that module 
module.exports = Student;
