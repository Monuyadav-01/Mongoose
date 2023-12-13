import mongoose from "mongoose";



const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product "
    }


})


const orderSchema = new mongoose.Schema({


    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItem: {
        type: []
    }
}, { timestamps: true })

export const Order = mongoose.model("Order", orderSchema)