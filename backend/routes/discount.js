const Discount = require("../models/Discount");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE DISCOUNT
router.post("/", verifyToken, async (req, res) => {
    const newDiscount = new Discount(req.body);
  
    try {
      const savedDiscount = await newDiscount.save();
      res.status(200).json(savedDiscount);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//UPDATE DISCOUNT
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      const updatedDiscount = await Discount.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedDiscount);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//DELETE DISCOUNT
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      await Discount.findByIdAndDelete(req.params.id);
      res.status(200).json("Discount Code has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });


//GET ALL DISCOUNTS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
      const discounts = await Discount.find();
      res.status(200).json(discounts);
    } catch (err) {
      res.status(500).json(err);
    }
  });
    
module.exports = router;