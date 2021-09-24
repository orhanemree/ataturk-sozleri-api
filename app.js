const app = require('express')();
const quotes = require('./quotes.json');

app.get("/", (req, res) => {
    res.status(200).json(quotes[Math.floor(Math.random() * quotes.length)]);
});

app.listen(8080);