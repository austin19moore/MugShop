const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        title:{type: String, required:true, unique:true},
        desc:{type: String, required:true},
        img:{type: String, required: true},
        categories:{type: String, required: true},
        price:{type: Number, required:true},
        quantity: {type: Number, default: 0}
    },
    );

module.exports = mongoose.model("Products", ProductSchema);  