const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/api_web_tech_assignment", (data)=> {
    console.log("Successfully connected to db");
}, (err)=> {
    console.log(err)
});