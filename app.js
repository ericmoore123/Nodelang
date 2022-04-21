// Base includes
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Gets project rootDirectory (Removes need for "__dirname")
const rootDir = require('./helpers/path');

// Include custom routers
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (req, res, next) => {
    console.log('Site loaded successfuly...');
    next();
});

// Enable use of custom router routes
app.use('/admin', adminRouter);
app.use('/', shopRouter);

// Add styles
app.use(express.static(path.join(rootDir, 'public')));

// 404 Page fallback handler
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
    console.log('listening on port: ', PORT)
});

// module.exports = path.dirname(process.mainModule.filename);
// module.exports = path.dirname(require.main.filename);