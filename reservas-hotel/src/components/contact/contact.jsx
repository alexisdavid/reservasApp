import React from "react";

const Contact = () => {
  return (
    // <!--=====================================
    // CONTÁCTENOS
    // ======================================-->

    <div className="contactenos container-fluid bg-white py-5" id="contactenos">
      <h1 className="py-sm-4">CONTÁCTENOS</h1>
      <div className="container text-center contacto">
        <form>
          <div className="input-group input-group-lg">
            <input
              type="text"
              className="form-control mb-3 mr-2 form-control-lg"
              placeholder="Nombre"
            />

            <input
              type="text"
              className="form-control mb-3 ml-2 form-control-lg"
              placeholder="Apellido"
            />
          </div>

          <div className="input-group input-group-lg">
            <input
              type="text"
              className="form-control mb-3 mr-2 form-control-lg"
              placeholder="Móvil"
            />

            <input
              type="text"
              className="form-control mb-3 ml-2 form-control-lg"
              placeholder="Correo Electrónico"
            />
          </div>

          <textarea
            className="form-control"
            rows="6"
            placeholder="Escribe aquí tu mensaje"
          ></textarea>
          <button
            type="button"
            className="btn btn-dark my-5 btn-lg py-3 text-uppercase"
            value="Enviar"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
