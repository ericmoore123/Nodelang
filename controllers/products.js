// Product logic controller file

// Import Product class model
const Product = require("../Models/product");

// Admin.js controller function
exports.getAddProductPage = (req, res, next) => {
  //  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render("add-product", {
    pageTitle: "Add product",
    activeAddProduct: true,
  });
};

// Admin.js controller function
exports.postAddProductPage = (req, res, next) => {
  const product = new Product(req.body.title, req.body.description); // Save product as instance of Product Model
  product.saveProduct(); // Call save function to add to array of saved products
  //   products.push({ title: req.body.title, description: req.body.description });
  res.redirect("/"); // Auto rediredt page to url on req
};

// Shop.js controller function
exports.getShopProductsPage = (req, res, next) => {
  // Fetch all products from model
  const products = Product.fetchAll();
  console.log("Available products: ", products);
  res.render("shop", {
    pageTitle: "Shop",
    products: products,
    haveProducts: products.length > 0,
    activeShop: true,
  });
};
