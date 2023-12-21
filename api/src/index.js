const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express();

app.use(cors());
app.use(bodyParser.json());

app
    .get("/", (req, res) => {
        console.log(req);

        res.send("Hello");
    })
    .get("/test", (req, res) => {
        res.send("My first backend");
    })
    .get("/test/:id", (req, res) => {
        res.send(`Test ${req.params.id}`);
    })
app
    .post("/sign-in", (req, res) => {
        const { email, password } = req.body;

        if (email === "admin" && password === "admin1") {

            return res.json({
                token: "123456",
            });
        }

        res.status(401).send({
            message: 'invalid cred'
        });
    });
const port = 3001;

app.listen(port, () => {
    console.log(`Example app listen ${port}`);
})
