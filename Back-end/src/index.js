const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/login", (req, res) => {

  res.json({
    token: "123456",
  });

  // const { email, password } = res.body;

  // const token = jwt.sign({ email }, "secret-key");

  // res.json({
  //   token,
  // });
});

const port = 3001;

app.listen(port, () => {
  console.log(`Example app listen ${port}`);
});














// app.get("/", (req, res) => {
//   console.log(req);

//   res.send("Hello world");
// });

// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   if (email === "admin" && password === "admin1") {
//     return res.json({
//       token: "123456",
//     });
//   }

//   res.status(401).send({
//     message: "invalid cred",
//   });
// });