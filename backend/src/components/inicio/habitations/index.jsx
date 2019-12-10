import React from "react";
import "./habitaciones.css";
import SalesCharts from "../charts";

const HabitationsCards = () => {
  return (
    <div>
      <div class="row">
        <div class="col-md-3">
          <div class="card habitaciones">
            <div className="titulo">
              <h4 class="card-title text-center">Habitación más reservada</h4>
            </div>
            <img
              class="card-img-top img"
              src="https://marinaterra.com/wp-content/uploads/habitaciones_suite_terra-2.jpg"
              alt="Card image cap"
              style={{ alignSelf: "center" }}
            />
            <div class="card-body">
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                aliquid illum aperiam,
              </p>
            </div>
            <button
              class="btn btn-info btn-round boton"
              style={{ alignSelf: "center" }}
            >
              <i class="material-icons">info</i> ver más
            </button>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card habitaciones">
            <div className="titulo">
              <h4 class="card-title text-center">Habitación menos reservada</h4>
            </div>
            <img
              class="card-img-top img"
              src="https://oasishoteles.sfo2.cdn.digitaloceanspaces.com/assets/img/cancun/hoteles/grand-oasis-cancun/habitaciones/ocean-view/01.jpg"
              alt="Card image cap"
              style={{ alignSelf: "center" }}
            />
            <div class="card-body">
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate nam repudiandae
              </p>
            </div>
            <button
              class="btn btn-info btn-round boton"
              style={{ alignSelf: "center" }}
            >
              <i class="material-icons">info</i> ver más
            </button>
          </div>
        </div>
        <SalesCharts />
      </div>
    </div>
  );
};

export default HabitationsCards;
