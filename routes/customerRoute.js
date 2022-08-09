const express = require("express");
const customerModal= require("../models/customer");
const router = express.Router();

router.post("/addCustomer", async(req,res)=>{
    try{
        const customers = new customerModal(req.body);
        const createCustomer = await customers.save();
        res.status(201).send(createCustomer);
    }
    catch(e){
        res.status(400).send("Error in catch");
        console.log(e)
    }
});

router.get("/customer", (req, res)=> {
    customerModal.find().then((customerData)=> {
        res.status(200).send({customer: customerData});
    });
})

module.exports = router;