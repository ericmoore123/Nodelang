// Product logic controller file

const products = [];

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
  products.push({ title: req.body.title, description: req.body.description });
  res.redirect("/"); // Auto rediredt page to url on req
};

// Shop.js controller function
exports.getShopProductsPage = (req, res, next) => {
  console.log("Available products: ", products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
//   let products = adminData.products;
  res.render("shop", {
    pageTitle: "Shop",
    products: products,
    haveProducts: products.length > 0,
    activeShop: true,
  });
};
