// Admin routes for admin users
const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../helpers/path');

const products = [];

// /admin - routes
router.get('/add-product', (req, res, next) => {
   //  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
   res.render('add-product', {pageTitle: 'Add product', activeAddProduct: true});
 });

 router.post("/add-product", (req, res, next) => {
    products.push({title: req.body.title, description: req.body.description});
    res.redirect('/'); // Auto rediredt page to url on req
 });

exports.router = router;
exports.products = products;