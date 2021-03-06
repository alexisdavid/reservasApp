const express = require("express");

//------usar express----//
let app = express();
// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//---requerir rutas ------------///
app.use(require("./routes/index.js"));

//-----------iniciar el servidor ------//
app.listen(3001, () => {
  console.log("online");
});

module.exports = app;
