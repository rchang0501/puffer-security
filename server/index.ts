// ref: https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/
// ref: https://socket.io/get-started/chat

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http");

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const db = require("./queries.ts");
const port = 5000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/users", db.getUsers);
app.get("/users/:id", db.getUserById);
app.post("/users", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);

app.get("/", (req, res) => {
  res.sendFile("server" + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
