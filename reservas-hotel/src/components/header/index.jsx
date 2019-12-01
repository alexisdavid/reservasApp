/**
 *  @name: header.jsx
 *  @version: 1.0.0
 *  @author: Trejocode - Sergio
 *  @description: Componente Header
 */

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Menus from "./menus";
import MenusMovil from "./menusMovil";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openM, setOpenM] = useState(false);
  const [openInfo, setOpenInfo] = useState(true);

  const openMenu = () => {
    setOpen(!open);
    setOpenInfo(false);
  };

  const openMenuM = () => {
    setOpenM(!openM);
  };

  const openSearch = () => {
    setOpenInfo(!openInfo);
    setOpen(false);
  };
  return (
    <div>
      {/* // <!--=====================================
  // HEADER
  // ======================================--> */}

      <header className="container-fluid p-0 bg-white">
        <div className="container p-0">
          <div className="grid-container py-2">
            {/*   <!-- LOGO --> */}

            <div className="grid-item">
              <a href="index.html">
                <img src="img/logoPortobelo.png" className="img-fluid" />
              </a>
            </div>

            <div className="grid-item d-none d-lg-block"></div>

            {/* <!-- CAMPANA Y RESERVA --> */}

            <div className="grid-item d-none d-lg-block bloqueReservas">
              <div
                className="py-2 campana-y-reserva mostrarBloqueReservas"
                modo="abajo"
                onClick={() => openSearch()}
              >
                <i className="fas fa-concierge-bell lead mx-2"></i>

                <i className="fas fa-caret-up lead mx-2 flechaReserva"></i>
              </div>

              {/* <!--=====================================
                    FORMULARIO DE RESERVAS
                    ======================================--> */}
              {openInfo ? (
                <div className="formReservas py-1 py-lg-2 px-4">
                  <div className="form-group my-4">
                    <select className="form-control form-control-lg">
                      <option>Tipo de habitación</option>
                      <option>Suite</option>
                      <option>Especial</option>
                      <option>Standar</option>
                    </select>
                  </div>

                  <div className="form-group my-4">
                    <select className="form-control form-control-lg">
                      <option>Temática de habitación</option>
                      <option>Oriental</option>
                      <option>Contemporánea</option>
                      <option>Africana</option>
                      <option>Clásica</option>
                      <option>Retro</option>
                    </select>
                  </div>

                  <div className="row">
                    <div className="col-6 input-group input-group-lg pr-1">
                      <input
                        type="text"
                        className="form-control datepicker entrada"
                        placeholder="Entrada"
                      />

                      <div className="input-group-append">
                        <span className="input-group-text p-2">
                          <i className="far fa-calendar-alt small text-gray-dark"></i>
                        </span>
                      </div>
                    </div>

                    <div className="col-6 input-group input-group-lg pl-1">
                      <input
                        type="text"
                        className="form-control datepicker salida"
                        placeholder="Salida"
                      />

                      <div className="input-group-append">
                        <span className="input-group-text p-2">
                          <i className="far fa-calendar-alt small text-gray-dark"></i>
                        </span>
                      </div>
                    </div>
                  </div>

                  <input
                    type="button"
                    className="btn btn-block btn-lg my-4 text-white"
                    value="Ver disponibilidad"
                  />
                </div>
              ) : null}
            </div>
            {/* <!-- INGRESO DE USUARIOS --> */}

            <div className="grid-item d-none d-lg-block mt-2">
              <a href="#modalIngreso" data-toggle="modal">
                <i className="fas fa-user"></i>
              </a>
            </div>

            {/* <!-- SELECCIÓN DE IDIOMA --> */}

            <div className="grid-item d-none d-lg-block mt-1 idiomas">
              <span className="border border-info float-left p-1 bg-info text-white idiomaEs">
                ES
              </span>

              <span className="border border-info float-left p-1 bg-white text-dark idiomaEn">
                EN
              </span>
            </div>

            {/* <!-- MENÚ HAMBURGUESA --> */}

            <div
              className="grid-item mt-1 mt-sm-3 mt-md-4 mt-lg-2 botonMenu"
              onClick={() => openMenu()}
            >
              <i className="fas fa-bars lead"></i>
            </div>
            <div
              className="grid-item mt-1 mt-sm-3 mt-md-4 mt-lg-2 botonMenuMovil"
              onClick={() => openMenuM()}
            >
              <i className="fas fa-bars lead"></i>
            </div>
          </div>
        </div>
      </header>
      {open ? <Menus /> : null}
      {openM ? <MenusMovil /> : null}
    </div>
  );
};

export default Header;
