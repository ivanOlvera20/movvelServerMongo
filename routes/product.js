const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

//get one
router.get("/:id", (req, res) => {
  Product.findById(req.params.id)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(404).json({ success: false, msg: `No such product.` });
    });
});

// READ (ALL)
router.get("/", (req, res) => {
  Product.find({})
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res
        .status(500)
        .json({ success: false, msg: `Something went wrong. ${err}` });
    });
});

//Post One

async function addProduct(req, res) {
  try {
    const { name, size, unitaryPrice, description } = req.body;

    const product = Product({
      name,
      size,
      unitaryPrice,
      description
    });

    const productStored = await product.save();

    res.status(201).send({ productStored });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
}

router.post("/", addProduct);

module.exports = router;
