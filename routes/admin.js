// Admin routes for creating shop products

const express = require('express');
const router = express.Router();
const path = require('path');

const rootDir = require('../helpers/path');

const products = [];

// /admin - routes
router.get('/add-product', (req, res, next) => {
   //  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
   res.render('add-product', {pageTitle: 'Add product'});
 });

 router.post("/add-product", (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/'); // Auto rediredt page to url on req
 });

exports.router = router;
exports.products = products;