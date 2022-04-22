// 404 Page not found controller
exports.getPageNotFound = (req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  const errCode = 404;
  console.error("Page not found:", errCode);
  res.status(404).render("404", { pageTitle: "Page Not Found" });
};
