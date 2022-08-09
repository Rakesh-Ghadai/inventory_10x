const express = require("express");
const mongoose = require('mongoose');
const app = express();
const customerController = require("./routes/customerRoute");
const inventoryController = require("./routes/inventoryRoute");
const orderController = require("./routes/orderRoute");


const port= 3002
// const cors= require('cors');

app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb+srv://ayush:ayush12@instaclonecluster.sw7rw.mongodb.net/inventory?retryWrites=true&w=majority", (data)=> {
//     console.log("Successfully connected to db");
// }, (err)=> {
//     console.log(err)
// });

mongoose.connect("mongodb://localhost:27017/api_web_tech_assignment", (data)=> {
    console.log("Successfully connected to db");
}, (err)=> {
    console.log(err)
});

app.listen(port, (err)=> {
    if(!err) {
        console.log(`Server started at port ${port}`)
    } else {
        console.log(err);
    }
});

app.get("/", (req, res)=>{
    res.status(200).send("Backend works")
})

app.use(customerController);
app.use(inventoryController);
app.use(orderController);
