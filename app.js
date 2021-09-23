const app = require('express')();

app.get("/", (req, res) => {
    res.end("Hello, World.");
});

app.listen(8080);