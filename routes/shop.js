const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../helpers/path");

// Bring in admin page data (temp)
// const adminData = require("./admin");

// Import controllers
const productsController = require("../controllers/products");

// "/" - routes
router.get("/", productsController.getShopProductsPage);

module.exports = router;
