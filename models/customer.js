const mongoose = require('mongoose');
const validator= require('validator');

const customerSchema=new mongoose.Schema({
    customer_id:{
        type:Number,
        required:true

    },
    customer_name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email id already present"],
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("Invalid Email type")
            }
        }
    }
})

const customer = new mongoose.model('customer',customerSchema);
module.exports=customer;