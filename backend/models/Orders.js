const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema(
    {
        userId:{type: String, required:true},
        products:[
            {
                productId:{
                    type:String
                },
                title:{
                    type: String
                },
                img:{
                    type: String
                },
                quantity:{
                    type: Number,
                    default: 1
                },
            },
        ],
        amount: {type: Number, required: true},
        date: {type: Date, required:true},
        status: {type: String, default:"Ordered"}
    },
    {timestamps: true});

module.exports = mongoose.model("Orders", OrderSchema);