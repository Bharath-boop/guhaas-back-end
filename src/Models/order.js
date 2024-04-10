import mongoose from "./index.js";

const orderSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    order_data:{
        type:Array,
        required:true
    },
    
  
},{
    collection:'Order',
    versionKey:false
})




const OrderModel = mongoose.model('Order', orderSchema)

export default OrderModel
