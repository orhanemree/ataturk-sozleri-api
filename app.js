const app = require('express')();
const quotes = require('./quotes.json');

app.get("/", (req, res) => {
    res.json(quotes[Math.floor(Math.random() * quotes.length)]);
    res.writeHead(200, { 'Content-Type': 'application/json'});
});

app.listen(8080);