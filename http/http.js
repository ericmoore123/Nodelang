const http = require('http');
const dotenv = require('dotenv')

dotenv.config();

const hostname = `127.0.0.2`;
const PORT = process.env.PORT || 3001;

const content = {
    "name": "Hello, World!"
};

const server = http.createServer((req, res) => {
    res.sendStatus = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(content.name));
});

server.listen(PORT, hostname, () => {
    console.log(`listening on port: ${PORT}`);
});