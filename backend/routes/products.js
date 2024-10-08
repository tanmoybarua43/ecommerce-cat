const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // You need to create this model

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new product
router.post('/add', async (req, res) => {
  const { name, price, description } = req.body;
  const product = new Product({ name, price, description });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
