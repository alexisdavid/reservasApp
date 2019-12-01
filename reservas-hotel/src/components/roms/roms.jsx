/**
 *  @name: footer.jsx
 *  @version: 1.0.0
 *  @author: alexis
 *  @description: Componente plans
 */

import React, { useState } from "react";

const Roms = () => {
  // <!--=====================================
  // HABITACIONES
  // ======================================-->

  return (
    <div className="habitaciones container-fluid bg-light" id="habitaciones">
      <h1 className="pt-5 text-center">HABITACIONES</h1>
      <div className="container">
        <div className="row p-4 text-center">
          <div className="col-12 col-lg-4 pb-3 px-0 px-lg-3">
            <a href="habitaciones.html">
              <figure className="text-center">
                <img
                  src="img/habitacion01.png"
                  className="img-fluid"
                  width="100%"
                />

                <p className="small py-4 mb-0">Lorem ipsum dolor sit amet</p>

                <h3 className="py-2 text-gray-dark mb-0">DESDE $300 USD</h3>

                <h5 className="py-2 text-gray-dark border">
                  Ver detalles <i className="fas fa-chevron-right ml-2"></i>
                </h5>

                <h1
                  className="text-white p-3 mx-auto w-50 lead"
                  style={{ background: "#847059" }}
                >
                  SUITE
                </h1>
              </figure>
            </a>
          </div>

          <div className="col-12 col-lg-4 pb-3 px-0 px-lg-3">
            <a href="habitaciones.html">
              <figure className="text-center">
                <img
                  src="img/habitacion02.png"
                  className="img-fluid"
                  width="100%"
                />

                <p className="small py-4 mb-0">Lorem ipsum dolor sit amet</p>

                <h3 className="py-2 text-gray-dark mb-0">DESDE $200 USD</h3>

                <h5 className="py-2 text-gray-dark border">
                  Ver detalles <i className="fas fa-chevron-right ml-2"></i>
                </h5>

                <h1
                  className="text-white p-3 mx-auto w-50 lead"
                  style={{ background: "#197DB1" }}
                >
                  ESPECIAL
                </h1>
              </figure>
            </a>
          </div>

          <div className="col-12 col-lg-4 pb-3 px-0 px-lg-3">
            <a href="habitaciones.html">
              <figure className="text-center">
                <img
                  src="img/habitacion03.png"
                  className="img-fluid"
                  width="100%"
                />

                <p className="small py-4 mb-0">Lorem ipsum dolor sit amet</p>

                <h3 className="py-2 text-gray-dark mb-0">DESDE $150 USD</h3>

                <h5 className="py-2 text-gray-dark border">
                  Ver detalles <i className="fas fa-chevron-right ml-2"></i>
                </h5>

                <h1
                  className="text-white p-3 mx-auto w-50 lead"
                  style={{ background: "#2F7D84" }}
                >
                  STANDAR
                </h1>
              </figure>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Roms;
