const express = require("express");
const app = express();
app.use(express.json());

const hostname = "127.0.0.1";
const port = 8000;

const todos = [
  {
    id: "0",
    name: "node js",
    isCompleted: false
  },
  {
    id: "1",
    name: "Express js",
    isCompleted: false
  }
];

const done = [];

// To display all the tasks
app.get("/tasks", (req, res) => {
  console.log("in /tasks");
  res.status(200).send(todos);
});

// To create task in todos list
app.post("/tasks", (req, res) => {
  console.log("in /tasks POST");
  todos.push({
    ...req.body,
    id: todos.length,
    isCompleted: false
  });
  res.status(201).send(todos);
});



app.listen(port, () => {
  console.log(`http://${hostname}:${port}`);
});
