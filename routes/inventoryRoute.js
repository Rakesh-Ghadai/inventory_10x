const express = require("express");
const inventoryModal= require("../models/inventory");
const router = express.Router();

router.post("/addInventory", async(req,res)=>{
    try{
        const inventories = new inventoryModal(req.body);
        const createInventory = await inventories.save();
        res.status(201).send(createInventory);
    }
    catch(e){
        res.status(400).send("Error in catch");
        console.log(e)
    }
});

router.get("/inventory", (req, res)=> {
    inventoryModal.find().then((inventoryData)=> {
        res.status(200).send({inventory: inventoryData});
    });
})

router.get("/inventory/electronics", (req, res)=> {
    inventoryModal.find({inventory_type:"electronic"}).then((electronicData)=> {
        res.status(200).send({electronicInventory: electronicData});
    });
})

router.get("/inventory/furniture", (req, res)=> {
    inventoryModal.find({inventory_type:"furniture"}).then((furnitureData)=> {
        res.status(200).send({furnitureInventory: furnitureData});
    });
})


module.exports = router;