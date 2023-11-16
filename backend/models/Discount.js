const mongoose = require("mongoose")

const DiscountSchema = new mongoose.Schema(
    {
        discount_code:{type: String, required: true, unique: true},
        price:{type: Number, required:true}
    },
    {timestamps: true});

module.exports = mongoose.model("Discount", DiscountSchema);