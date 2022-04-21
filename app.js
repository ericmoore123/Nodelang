const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (req, res, next) => {
    console.log('Site loaded successfuly...');
    next();
});

app.use(adminRouter);

app.use('/add-product', (req, res, next) => {
    res.send(`
        <form action="/product" method="post">
            <input type="text" name="title" placeholder="name"><br>
            <input type="text" name="type" placeholder="book type"><br>
            <button type="submit">Submit</button>
        </form>`
    ); 
 });

 app.post("/product", (req, res, next) => {
    let passedData = req.body;
    console.log(passedData);
    res.redirect('/'); // Auto rediredt page to url on req
 });

//  Fallback middleware
app.use('/', (req, res, next) => {
    res.send("<h2>Base route</h2>");
});

app.listen(PORT, () => {
    console.log('listening on port: ', PORT)
});