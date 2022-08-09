const express = require("express");
const orderModal= require("../models/order");
const inventoryModal=require("../models/inventory");
const router = express.Router();

router.post("/addOrder", async(req,res)=>{
    try{
        const inventory_detail= await inventoryModal.find();
        const id=req.body.inventory_id;
        const qty=inventory_detail.available_quantity;
        const qty_this=req.body.quantity;
        if(qty_this<=qty)
        {
            const orders = new orderModal(req.body);
            const createOrders = await orders.save();
            const updateInventory = await inventoryModal.findByIdAndUpdate({id},{
                $set:{
                    available_quantity:qty-qty_this
                }
            })
            res.status(201).send(createOrders);
            console.log(updateInventory);
        }else{
            res.status(409).send("Out of Stock");
        }
        
    }
    catch(e){
        res.status(400).send("Error in catch");
        console.log(e)
    }
});

module.exports = router;