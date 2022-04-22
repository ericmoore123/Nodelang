// Base includes
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const expressHbs = require("express-handlebars");

// Configure dotenv environment variables
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8080;

// Gets project rootDirectory (Removes need for "__dirname")
const rootDir = require("./helpers/path");

// Include custom routers
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

// Initialize handlebars engine
app.engine(
  "handlebars",
  expressHbs.engine({
    layoutsDir: "views/layouts", // Point to default layouts folder (good to have to show)
    defaultLayout: "main.handlebars", // Set default layout (also default out of the box)
  })
);
app.set("view engine", "handlebars");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

// Enable use of custom router routes
app.use("/admin", adminRouter.router);
app.use("/", shopRouter);

// Add styles
app.use(express.static(path.join(rootDir, "public")));

// 404 Page fallback handler
app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  const errCode = 404;
  console.error("Page not found:", errCode);
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(PORT, () => {
  console.log("listening on port: ", PORT);
});

// module.exports = path.dirname(process.mainModule.filename);
// module.exports = path.dirname(require.main.filename);
