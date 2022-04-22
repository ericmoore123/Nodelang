// Admin routes for admin users
const express = require("express");
const router = express.Router();

// Import controllers
const productsController = require("../controllers/products");

// /admin - routes
router.get("/add-product", productsController.getAddProductPage);

router.post("/add-product", productsController.postAddProductPage);

exports.router = router;
