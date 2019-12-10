import React from "react";
import menus from "./menus";

const Aside = () => {
  console.log(menus);

  return (
    <div
      className="sidebar"
      data-color="purple"
      data-background-color="white"
      data-image="../assets/img/sidebar-1.jpg"
    >
      <div className="logo">
        <a
          href="http://www.creative-tim.com"
          className="simple-text logo-normal"
        >
          PC-Performance (logotipo)
        </a>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className="nav-item active  ">
            <a className="nav-link" href="./dashboard.html">
              <i className="material-icons">dashboard</i>
              <p>Dashboard</p>
            </a>
          </li>
          {menus.map((menu, key) => (
            <li className="" key={key}>
              <a className="nav-link" href="./dashboard.html">
                {<i className="material-icons">{menu.icono}</i>}
                <p>{menu.descripcion}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Aside;
