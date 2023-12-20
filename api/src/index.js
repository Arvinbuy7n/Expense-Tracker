const express = require("express");

const app = express();

app
    .get("/", (req, res) => {
        console.log(req);

        res.send("Hello World");
    })
    .get("/test", (req, res) => {
        res.send("My first backend");
    })
    .get("/test/:id", (req, res) => {
        res.send(`Test ${req.params.id}`);
    })
const port = 3002;

app.listen(port, () => {
    console.log(`Example app listen ${port}`);
})
