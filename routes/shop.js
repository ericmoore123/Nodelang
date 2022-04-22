const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../helpers/path');

// Bring in admin page data (temp)
const adminData = require('./admin');

// "/" - routes
router.get("/", function (req, res, next) {
    console.log('Available products: ', adminData.products);
    // res.sendFile(path.join(rootDir, "views", "shop.html"));
    res.render('shop', { pageTitle: 'Shop', products: adminData.products, haveProducts: adminData.products.length > 0, activeShop: true});
});

module.exports = router; 