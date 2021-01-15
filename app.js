const express = require('express');
const app = express();
const port = 8080;

app.get('/', function(req, res) {
    res.send({"MSG":"Hello World!"});
});

app.listen(port, function(err) {
    console.log(`App running on http://localhost:${port}`);
});
