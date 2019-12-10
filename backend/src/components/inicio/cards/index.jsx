import React from "react";

const CardsInfo = () => {
  return (
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card card-stats">
          <div className="card-header card-header-warning card-header-icon">
            <div className="card-icon">
              <i className="material-icons">attach_money</i>
            </div>
            <p className="card-category">Ventas del mes</p>
            <h3 className="card-title">
              50000
              <small>USD</small>
            </h3>
          </div>
          <div className="card-footer">
            <div className="stats">
              <i className="material-icons text-danger">warning</i>
              <a href="#pablo">Reportes.</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card card-stats">
          <div className="card-header card-header-success card-header-icon">
            <div className="card-icon">
              <i className="material-icons">today</i>
            </div>
            <p className="card-category">Reservas activas</p>
            <h3 className="card-title">25</h3>
          </div>
          <div className="card-footer">
            <div className="stats">
              <i className="material-icons">date_range</i> Ver historial
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card card-stats">
          <div className="card-header card-header-danger card-header-icon">
            <div className="card-icon">
              <i className="material-icons">supervised_user_circle</i>
            </div>
            <p className="card-category">Clientes</p>
            <h3 className="card-title">25</h3>
          </div>
          <div className="card-footer">
            <div className="stats">
              <i className="material-icons">supervised_user_circle</i> Ver
              clientes
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card card-stats">
          <div className="card-header card-header-info card-header-icon">
            <div className="card-icon">
              <i className="material-icons">record_voice_over</i>
            </div>
            <p className="card-category">Reseñas</p>
            <h3 className="card-title">+245</h3>
          </div>
          <div className="card-footer">
            <div className="stats">
              <i className="material-icons">update</i> 5 sin aprobar.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsInfo;
