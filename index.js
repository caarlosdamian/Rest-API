const express = require("express");
const app = express();
app.use(express.json());

let userList = [
  {
    id: 1,
    name: "Carlos",
    age: 25,
    married: false,
  },
  {
    id: 2,
    name: "Mariana",
    age: 25,
    married: false,
  },
  {
    id: 3,
    name: "Carmen",
    age: 50,
    married: true,
  },
];

app.get("/users", (req, res) => {

  res.status(200).json(userList);
});

app.post("/users", (req, res) => {
  //Grab data sent by client
  //Add data to userList
  //Return new List
  const newUser = req.body;
  userList.push(newUser);
  res.json(userList);
});

app.put("/users", (req, res) => {
  const newName = req.body.newName;
  for (let i = 0; i < userList.length; i++) {
    userList[i].name = newName;
  }
  res.json(userList);
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  let foundId =false
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].id == id) {
      userList.splice(i, 1);
      foundId=true
    }
  }
  if(!foundId){
      res.status(404).json({error:"User Id not found"})
  }else{res.json(userList);}
  
});

app.listen("3002", () => {
  console.log("Server running on port 3002");
});
