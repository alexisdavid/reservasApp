/**
 *  @name: header.jsx
 *  @version: 1.0.0
 *  @author: Trejocode - Sergio
 *  @description: Componente Header
 */

import React from "react";
import { NavLink } from "react-router-dom";

const MenusMovil = () => (
  //       <!--=====================================
  // MENÚ MÓVIL
  // ======================================-->
  <div className="menuMovil">
    <div className="row">
      <div className="col-6">
        <a href="#modalIngreso" data-toggle="modal">
          <i
            className="fas fa-user  lead ml-3 mt-4"
            style={{ color: "blue" }}
          ></i>
        </a>
      </div>

      <div className="col-6">
        <div className="float-right mr-3 mt-3 mr-sm-5 mt-sm-4">
          <span className="border border-info float-left p-1 bg-info text-white idiomaEs">
            ES
          </span>
          <span className="border border-info float-left p-1 bg-white text-dark idiomaEn">
            EN
          </span>
        </div>
      </div>
    </div>

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
            type="date"
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
            type="date"
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

    <ul className="nav flex-column mt-4 pl-4 mb-5">
      <li className="nav-item">
        <a className="nav-link text-white my-2" href="#planesMovil">
          Planes
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link text-white my-2" href="#habitaciones">
          Habitaciones
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link text-white my-2" href="#pueblo">
          Recorrido por el pueblo
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link text-white my-2" href="#restaurante">
          Restaurante
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link text-white my-2" href="#contactenos">
          Contáctenos
        </a>
      </li>
    </ul>
  </div>
);

export default MenusMovil;
