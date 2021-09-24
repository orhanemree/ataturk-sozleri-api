const app = require('express')();
const quotes = require('./quotes.json');

app.get("/", (req, res) => {
    res.status(200).json(quotes[Math.floor(Math.random() * quotes.length)]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});