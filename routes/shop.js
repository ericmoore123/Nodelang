const express = require('express');
const router = express.Router();
const path = require('path');

const rootDir = require('../helpers/path');

const adminData = require('./admin');

// "/" - routes
router.get("/", function (req, res, next) {
    console.log(adminData.products);
    res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router; 