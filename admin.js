
const express = require('express');
const router = express.Router();

// Array to hold products (in-memory for simplicity)
let products = [];

// Render Add Product Form
router.get('/add-product', (req, res) => {
    res.render('add-product');
});

// Handle form submission
router.post('/add-product', (req, res) => {
    const { name, price, description, category, imageurl } = req.body;
    const newProduct = { name, price, description, category, imageurl };
    
    // Save product (in-memory storage for simplicity)
    products.push(newProduct);
    
    // Redirect to dashboard (or display a success message)
    res.redirect('/');
});

module.exports = router;
