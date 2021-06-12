const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const Document = require("./document");
const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const app = express();
app.use(cors());
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started on port ${port}`));

app.get("/documents", async (req, res) => {
  const docs = await Document.find();
  res.send(docs);
});

// Connect to database
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.9ym60.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const io = require("socket.io")(3001, {
  cors: { origin: "http://localhost:3006", methods: ["GET", "POST"] },
});

const defaultValue = "";

io.on("connection", (socket) => {
  console.log(`We have a new connection!`);
  socket.on("join", ({ name, document }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, document });
    if (error) return callback(error);
    socket.join(user.room);
    socket.emit("message", {
      user: "Admin",
      text: `${user.name}, welcome to room ${user.room}.`,
      type: `info`,
    });
    socket.broadcast.to(user.room).emit("message", {
      user: "Admin",
      text: `${user.name} has joined the chat!`,
      type: `info`,
    });
    io.to(user.document).emit("roomData", {
      room: user.document,
      users: getUsersInRoom(user.document),
    });
    callback();
  });
  socket.on("get-document", async (documentId) => {
    const { data } = await findOrCreateDocument(documentId);
    socket.join(documentId);
    socket.emit("load-document", data);
    socket.on("send-changes", (delta) => {
      socket.broadcast.to(documentId).emit("receive-changes", delta);
    });
    socket.on("save-document", async (data) => {
      await Document.findByIdAndUpdate(documentId, { data });
    });
  });
});

async function findOrCreateDocument(id) {
  if (id == null) return;

  const doc = await Document.findById(id);
  if (doc) return doc;
  return await Document.create({ _id: id, data: defaultValue });
}
