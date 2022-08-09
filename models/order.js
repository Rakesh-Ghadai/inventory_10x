const mongoose = require('mongoose');

const orderSchema=new mongoose.Schema({
    customer_id:{
        type:Number,
        required:true
    },
    inventory_id:{
        type:Number,
        required:true
    },
    item_name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true

    }
})

const order = new mongoose.model('order',orderSchema);

module.exports=order;