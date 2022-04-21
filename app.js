const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/home', (req, res) => {
   req.send("Hello, World!"); 
});

app.listen(PORT, () => {
    console.log('listening on port: ', PORT)
});