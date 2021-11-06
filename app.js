const app = require('express')();
const quotes = require('./quotes.json');
const cors = require("cors");
const favicon = require("serve-favicon");

app.use(favicon(__dirname + "/public/favicon.png"));
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).json(quotes[Math.floor(Math.random() * quotes.length)]);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});