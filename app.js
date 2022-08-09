const express = require("express");
const app = express();
require("./db/conn");
const customerController = require("./routes/customerRoute");
const inventoryController = require("./routes/inventoryRoute");
const orderController = require("./routes/orderRoute");


const port= 3002
// const cors= require('cors');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
// app.use(cors());

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
