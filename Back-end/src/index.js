const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
const users = [];

app.use(cors());
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);

  const token = jwt.sign({ email }, "secret-key", { expiresIn: "1h" });

  if (email === "Chekist" && password === "admin") {
    return res.json({
      token,
    });
  }

  res.status(401).send({
    message: "Invalid cred",
  });
});

const port = 3001;

app.listen(port, () => {
  console.log(`Chekist tanii portiig sonsoj chadaj bnaa ${port}`);
});
