const express = require("express");
const bodyParser = require("body-parser");

const itemsApiRouter = require("./routes/api/itemsRoute")

// app
const app = express();

// middlewares
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// routes
itemsApiRouter(app);

// server
const server = app.listen(8000, function() {
    console.log(`Listening http://localhost:${server.address().port}`);
});
