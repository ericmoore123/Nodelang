// Admin routes for creating shop products

const express = require('express');
const router = express.Router();
const path = require('path');

const rootDir = require('../helpers/path');

// /admin - routes
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
 });

 router.post("/product", (req, res, next) => {
    let passedData = req.body;
    console.log(passedData);
    res.redirect('/'); // Auto rediredt page to url on req
 });

module.exports = router;