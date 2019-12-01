const express = require("express");
const user = require("../../bd/user/user");
var bcrypt = require("bcryptjs");

let app = express();

// traer todos los usuarios
app.get("/users/getUsers", async (req, res) => {
  await user.getUser(res);
});

app.post("/users/createUser", (req, res) => {
  const { Nombre, Telefono, Usuario, Password } = req.body;

  let newpass = bcrypt.hashSync(Password, 10);
  let data = { Nombre, Telefono, Usuario, newpass };
  user.createUser(data, res);
});
app.post("/users/updateUser", (req, res) => {
  const { Nombre, Telefono, Usuario, Id } = req.body;

  let data = { Nombre, Telefono, Usuario, Id };
  user.updateUser(data, res);
});

module.exports = app;
