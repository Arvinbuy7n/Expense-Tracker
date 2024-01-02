const fs = require("fs").promises;

const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");

const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const filePath = "src/data/users.json";

  const usersRaw = await fs.readFile(filePath, "utf-8");

  const users = JSON.parse(usersRaw);

  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(401).json({
      message: "User not found",
    });
  }

  if (user.password != password) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const token = jwt.sign({ email }, "secret-key", { expiresIn: "1h" });

  res.json({
    token,
  });
});

app.post("/sign", async (req, res) => {
  const { email, password } = req.body;

  const filePath = "src/data/users.json";

  const usersRaw = await fs.readFile(filePath, "utf-8");

  const users = JSON.parse(usersRaw);

  const user = users.find((user) => user.email === email);

  if (user) {
    return res.status(409).json({
      message: "User already entered",
    });
  }

  users.push({
    email,
    password,
  });

  await fs.writeFile(filePath, JSON.stringify(users));

  res.json({
    message: "User created",
  });
});

const port = 3001;

app.listen(port, () => {
  console.log(`Chekist tanii portiig sonsoj chadaj bnaa ${port}`);
});
