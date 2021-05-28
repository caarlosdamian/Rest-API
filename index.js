const express = require("express");
const database = require("mime-db");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "userdb",
});

app.use(express.json());

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
        res.status(400).json(err)
    } else {
      res.status(200).json(result);
    }
  });
});

app.post("/users", (req, res) => {
    const {name,age} = req.body;
    db.query("INSERT INTO users (name,age) VALUES(?,?)", [name,age], (err, result) => {
        if (err) {
            res.status(400).json(err)
        } else {
          res.status(200).json(result);
        }
      });
});

app.put("/users", (req, res) => {});

app.delete("/users/:id", (req, res) => {});

app.listen("3002", () => {
  console.log("Server running on port 3002");
});
