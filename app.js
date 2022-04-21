const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (req, res, next) => {
    console.log('Site loaded successfuly...');
    next();
});

// Enable use of custom router routes
app.use(adminRouter);
app.use(shopRouter);

// 404 Page fallback handler
app.use((req, res, next) => {
    res.status(404).send("<h1>404 Page not found...</h1>");
});

app.listen(PORT, () => {
    console.log('listening on port: ', PORT)
});