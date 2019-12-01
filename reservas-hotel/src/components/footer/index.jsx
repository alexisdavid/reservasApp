/**
 *  @name: footer.jsx
 *  @version: 1.0.0
 *  @author: Trejocode - Sergio
 *  @description: Componente Footer
 */

import React from "react";
import RedesMovil from "./redesSocialesMovil";

const Footer = () => (
  <>
    <footer className="container-fluid p-0 footer">
      <div className="grid-container">
        <div className="grid-item d-none d-lg-block pt-2"></div>

        <div className="grid-item d-none d-lg-block pt-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat.
          </p>
        </div>

        <div className="grid-item pt-2">
          <ul className="py-1">
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-facebook-f lead text-white float-left mx-3"></i>
              </a>
            </li>

            <li>
              <a href="#" target="_blank">
                <i className="fab fa-twitter lead text-white float-left mx-3"></i>
              </a>
            </li>

            <li>
              <a href="#" target="_blank">
                <i className="fab fa-youtube lead text-white float-left mx-3"></i>
              </a>
            </li>

            <li>
              <a href="#" target="_blank">
                <i className="fab fa-instagram lead text-white float-left mx-3"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <RedesMovil />
  </>
);

export default Footer;
