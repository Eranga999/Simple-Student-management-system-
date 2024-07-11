//call instrall pacakges ex :express 
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();



//set the port
const PORT =process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());


//connect mongodb url call
//mongodb configaration add
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
   // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false
});



//create connection and show to user connect sucsess message
const connection = mongoose.connection;

// Event listener for MongoDB connection open
connection.once("open", () => {
    console.log("MongoDB connection successful !");
});


//routes folder eke heduw student js kiyna ek import krgnnw
const studentRouter = require("./routes/student.js");
http://localhost:8070/student
app.use("/student",studentRouter);


// run on port define
app.listen(PORT, () => {
    console.log(`server is up and running on port Number: ${PORT}`)
}) 


