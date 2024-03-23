const fs = require("fs").promises;

const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");

const jwt = require("jsonwebtoken");
const { connectDatabase } = require("./database");
const { User } = require("./model/user.model");
const { Category } = require("./model/category.model");
const { Record } = require("./model/records.model");

const app = express();

connectDatabase();

app.use(cors());
app.use(bodyParser.json());

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email, password: password });

  if (!user) {
    return res.status(401).json({
      message: "Ийм нэртэй хэрэглэгч олдсонгүй",
    });
  }

  const id = user._id;

  const token = jwt.sign({ id }, "secret-key");

  res.json({
    token,
  });

  // if (user.password != password) {
  //   return res.status(401).json({
  //     message: "Нууц үг буруу байна",
  //   });
  // }

  // const filePath = "src/data/users.json";

  // const usersRaw = await fs.readFile(filePath, "utf-8");

  // const users = JSON.parse(usersRaw);

  // const user = users.find((user) => user.email === email);
});

app.post("/sign", async (req, res) => {
  const { email, password, name } = req.body;

  const user = await User.findOne({ email: email });

  if (user) {
    return res.status(401).json({
      message: "User already exist",
    });
  }

  await User.create({
    name,
    email,
    password,
    updatedAt: new Date(),
    createdAt: new Date(),
  });

  res.json({
    message: "Шинэ хэрэглэгч амжилттай үүслээ.",
  });

  // const filePath = "src/data/users.json";

  // const usersRaw = await fs.readFile(filePath, "utf-8");

  // const users = JSON.parse(usersRaw);

  // const user = users.find((user) => user.email === email);

  // if (user) {
  //   return res.status(409).json({
  //     message: "Хэрэглэгч нэвтэрсэн байна.",
  //   });
  // }

  // users.push({
  //   name,
  //   email,
  //   password,
  // });

  // await fs.writeFile(filePath, JSON.stringify(users));
});

app.get("/users", async (_req, res) => {
  const users = await User.find({});

  res.json({
    users,
  });
  // const filePath = "src/data/users.json";

  // const usersRaw = await fs.readFile(filePath, "utf8");

  // const users = JSON.parse(usersRaw);
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

    const { id } = payload;

    const { category, amount, type, date, payee, note, color, icon, time } =
      req.body;

    await Record.create({
      userId: id,
      type,
      category,
      amount,
      date,
      payee,
      note,
      color,
      icon,
      time,
      updatedAt: new Date(),
      createdAt: new Date(),
    });

    res.json({
      message: "Шинэ бүтээгдхүүн амжилттай үүслээ.",
    });
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  // const filePath = "src/data/records.json";

  // const recordsRaw = await fs.readFile(filePath, "utf-8");

  // const records = JSON.parse(recordsRaw);

  // records.push({
  //   type,
  //   category,
  //   amount,
  //   date,
  //   payee,
  //   note,
  //   color,
  //   icon,
  //   time,
  //   userEmail: email,
  // });

  // await fs.writeFile(filePath, JSON.stringify(records));
});

app.get("/records", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorization",
    });
  }

  try {
    const payload = jwt.verify(authorization, "secret-key");

    const { id } = payload;

    const record = await Record.find({ userId: id });

    return res.json(record);
  } catch (error) {
    return res.status(401).json({
      message: "Authorized",
    });
  }

  // const filePath = "src/data/records.json";

  // const recordsRaw = await fs.readFile(filePath, "utf-8");

  // const records = JSON.parse(recordsRaw);

  // const userRecords = records.filter((record) => record.userEmail === email);
});

app.post("/category", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized2",
    });
  }

  try {
    const payload = jwt.verify(authorization, "secret-key");

    const { id } = payload;

    const { icon, cate, color } = req.body;

    const category = await Category.findOne({ userId: id, cate: cate });

    if (category) {
      console.log("GGG");
      return res.status(401).json({
        message: "Category already exist",
      });
    }

    await Category.create({
      userId: id,
      icon,
      cate,
      color,
      updatedAt: new Date(),
      createdAt: new Date(),
    });

    res.json({
      message: "new category created",
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  // const filePath = "src/data/categories.json";

  //   const categoryRaw = await fs.readFile(filePath, "utf8");

  //   const category = JSON.parse(categoryRaw);

  //   category.push({
  //     icon,
  //     color,
  //     cate,
  //     userEmail: email,
  //   });

  //   await fs.writeFile(filePath, JSON.stringify(category));
});

app.get("/category", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const payload = jwt.verify(authorization, "secret-key");

    const { id } = payload;

    const category = await Category.find({ userId: id });

    return res.json(category);
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  // const filePath = "src/data/categories.json";

  // const categoryRaw = await fs.readFile(filePath, "utf-8");

  // const category = JSON.parse(categoryRaw);

  // const userCategory = category.filter(
  //   (categor) => categor.userEmail === email
  // );

  // res.json(userCategory);
});

const port = 3001;

app.listen(port, () => {
  console.log(`Chekist tanii portiig sonsoj chadaj bnaa ${port}`);
});
