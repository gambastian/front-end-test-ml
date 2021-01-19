const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const itemsApiRouter = require("./routes/api/itemsRoute")

// app
const app = express();

// middlewares
app.use(bodyParser.json());

// routes
itemsApiRouter(app);

// server
const server = app.listen(8000, function() {
    console.log(`Listening http://localhost:${server.address().port}`);
});
