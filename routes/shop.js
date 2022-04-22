const express = require("express");
const router = express.Router();

// Import controllers
const productsController = require("../controllers/products");

// "/" - routes
router.get("/", productsController.getShopProductsPage);

module.exports = router;
