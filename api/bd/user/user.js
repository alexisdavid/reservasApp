const db = require("../../bd/conexion");

function getUser(res, data) {
  const query = "CALL sp_GetUsers()";
  db.query(query, (err, rows, filds) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      return res.json({
        ok: false,
        mensaje: "error de servidor",
        errors: err
      });
    }
  });
}

function createUser(data, res) {
  const consulta = "CALL sp_Personas_Crear(?,?,?,?);";
  db.query(
    consulta,
    [data.Nombre, data.Telefono, data.Usuario, data.newpass],
    (err, rows, filds) => {
      if (!err && rows.affectedRows > 0) {
        res.json({
          status: 201,
          message: "Usuario creado",
          affectedRows: rows.affectedRows
        });
      } else {
        return res.json({
          ok: false,
          mensaje: "error de servidor",
          errors: err
        });
      }
    }
  );
}

function updateUser(data, res) {
  const consulta = "CALL sp_Personas_Actualizar(?,?,?,?);";
  db.query(
    consulta,
    [data.Nombre, data.Telefono, data.Usuario, data.Id],
    (err, rows, filds) => {
      if (!err && rows.affectedRows > 0) {
        res.json({
          ok: true,
          status: 201,
          message: "Usuario actualizado",
          affectedRows: rows
        });
      } else {
        return res.json({
          ok: false,
          mensaje: "error de servidor",
          err
        });
      }
    }
  );
}

module.exports = {
  getUser,
  createUser,
  updateUser
};
