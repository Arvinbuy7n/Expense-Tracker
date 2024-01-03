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
      message: "Ийм нэртэй хэрэглэгч олдсонгүй",
    });
  }

  if (user.password != password) {
    return res.status(401).json({
      message: "Нууц үг буруу байна",
    });
  }

  const token = jwt.sign({ email }, "secret-key");

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
      message: "Хэрэглэгч нэвтэрсэн байна.",
    });
  }

  users.push({
    email,
    password,
  });

  await fs.writeFile(filePath, JSON.stringify(users));

  res.json({
    message: "Шинэ хэрэглэгч амжилттай үүслээ.",
  });
});

app.get("/users", async (_req, res) => {
  const filePath = "src/data/users.json";

  const usersRaw = await fs.readFile(filePath, "utf8")

  const users = JSON.parse(usersRaw);

  res.json({
    users,
  });
});

app.post("/records", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Should be token!!",
    });
  }

  try {
    const payload = jwt.verify(authorization, "secret-key");

    const { email } = payload;

    const { category, amount, type } = req.body;

    const filePath = "src/data/records.json";

    const recordsRaw = await fs.readFile(filePath, "utf-8");

    const records = JSON.parse(recordsRaw);

    records.push({
      type,
      category,
      amount,
      userEmail: email,
    });

    await fs.writeFile(filePath, JSON.stringify(records));

    res.json({
      message: "Шинэ хэрэглэгч үүссэн байна.",
    });
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
});

app.get("/records", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({
      message: "Unauthorization1",
    });
  }

  try {
    const payload = jwt.verify(authorization, "secret-key");

    const { email } = payload;

    const filePath = "src/data/records.json";

    const recordsRaw = await fs.readFile(filePath, "utf-8");

    const records = JSON.parse(recordsRaw);

    const userRecords = records.filter((record) => record.userEmail === email);

    res.json({
      records: userRecords,
    });
  } catch (error) {
    return res.status(401).json({
      message: "Author",
    });
  }
});

app.post("/category", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized2"
    })
  }

  try {
    const payload = jwt.verify(authorization, "secret-key")

    const { email } = payload;


    const { icon, cate, color } = req.body;


    const filePath = "src/data/categories.json";

    const categoryRaw = await fs.readFile(filePath, "utf8");

    const category = JSON.parse(categoryRaw);

    category.push({
      icon,
      color,
      cate,
      userEmail: email,
    });



    await fs.writeFile(filePath, JSON.stringify(category));

    res.json({
      message: "new category created"
    });
  } catch (error) {
    return res.status(401).json({
      message: "unauthor"
    });
  }
});

app.get("/category", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({
      message: "authorized"
    });
  }

  try {
    const payload = jwt.verify(authorization, "secret-key");

    const { email } = payload;

    const filePath = "src/data/categories.json";

    const categoryRaw = fs.readFile(filePath, "utf-8");

    const category = JSON.parse(categoryRaw)

    const userCategory = category.filter((categor) => categor.userEmail === email);

    res.json({
      category: userCategory,
    });
  } catch (err) {
    return res.status(401).json({
      message: "Unauthor12"
    });
  }
});



const port = 3001;

app.listen(port, () => {
  console.log(`Chekist tanii portiig sonsoj chadaj bnaa ${port}`);
});
