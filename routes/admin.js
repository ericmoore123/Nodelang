// Admin route for creating shop products

const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send(`
        <form action="/product" method="post">
            <input type="text" name="title" placeholder="name"><br>
            <input type="text" name="type" placeholder="book type"><br>
            <button type="submit">Submit</button>
        </form>`
    ); 
 });

 router.post("/product", (req, res, next) => {
    let passedData = req.body;
    console.log(passedData);
    res.redirect('/'); // Auto rediredt page to url on req
 });

module.exports = router;