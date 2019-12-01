/**
 *  @name: footer.jsx
 *  @version: 1.0.0
 *  @author: Trejocode - Sergio
 *  @description: Componente Footer
 */

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = () => (
  // <!--=====================================
  // BANNER
  // ======================================-->

  <div className="banner container-fluid p-0 " style={{ marginTop: "55px" }}>
    <div className="jd-slider fade-slider">
      <div className="slide-inner">
        <Carousel autoPlay={true} infiniteLoop={true} width={100 + "%"}>
          <div>
            <img src="img/banner01.jpg" width="90%" />
          </div>

          <div>
            <img src="img/banner02.jpg" width="90%" />
          </div>

          <div>
            <img src="img/banner03.jpg" width="90%" />
          </div>

          <div>
            <img src="img/banner04.jpg" width="90%" />
          </div>
        </Carousel>
      </div>

      <div className="controller d-none">
        <a className="auto" href="#">
          <i className="fas fa-play fa-xs"></i>
          <i className="fas fa-pause fa-xs"></i>
        </a>

        <div className="indicate-area"></div>
      </div>

      {/* <div
        className="verMas text-center bg-white rounded-circle d-none d-lg-block"
        vinculo="#planes"
      >
        <i className="fas fa-chevron-down"></i>
      </div> */}
    </div>
  </div>
);

export default Slider;
