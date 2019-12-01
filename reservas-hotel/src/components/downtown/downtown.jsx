/**
 *  @name: footer.jsx
 *  @version: 1.0.0
 *  @author: Trejocode - Sergio
 *  @description: Componente Footer
 */

import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const DownTown = () => {
  const [size, setSize] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", resize);
    resize();

    // if (window.innerWidth >= 500) {
    //   setSize(false);
    // }
  });
  const resize = () => {
    let currentHideNav = window.innerWidth >= 480;
    if (currentHideNav) {
      console.log("mayor");

      setSize(false);
    } else {
      console.log("menor");

      setSize(true);
    }
  };
  return (
    // <!--=====================================
    // RECORRIDO POR EL PUEBLO
    // ======================================-->

    <div className="recorridoPueblo container-fluid bg-white pb-5" id="pueblo">
      <h1 className="pt-5 text-center">RECORRIDO POR EL PUEBLO</h1>
      <div className="container">
        <div className="jd-slider slidePueblo">
          <div className="slide-inner">
            <ul className="slide-area">
              <Carousel
                showThumbs={false}
                showStatus={false}
                useKeyboardArrows
                className="presentation-mode"
                autoPlay={true}
                infiniteLoop={true}
                width={size ? "250px" : "100%"}
              >
                <div style={{ backgroundColor: "#fff" }}>
                  <div className="grid-container pt-4 pb-1 pb-lg-3 px-0 px-lg-5">
                    <div className="grid-item">
                      <img
                        src="img/pueblo01a.png"
                        className="img-fluid"
                        width="100%"
                      />
                    </div>

                    <div className="grid-item">
                      <h1 className="mt-4 mb-0 my-lg-2">LOREM IPSUM</h1>

                      <p className="small p-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Explicabo velit quis iusto magnam cupiditate
                        dolorum repudiandae tempore cum minus eos a iure,
                        officiis, eius, consequuntur unde nulla, enim quibusdam
                        beatae.
                      </p>
                    </div>

                    <div className="grid-item d-none d-lg-block">
                      <img
                        src="img/pueblo01b.png"
                        className="img-fluid"
                        width="100%"
                      />
                    </div>
                  </div>
                </div>

                <div style={{ backgroundColor: "#fff" }}>
                  <div className="grid-container pt-4 pb-1 pb-lg-3 px-0 px-lg-5">
                    <div className="grid-item">
                      <img
                        src="img/pueblo02a.png"
                        className="img-fluid"
                        width="100%"
                      />
                    </div>

                    <div className="grid-item">
                      <h1 className="mt-4 mb-0 my-lg-2">LOREM IPSUM</h1>

                      <p className="small p-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Explicabo velit quis iusto magnam cupiditate
                        dolorum repudiandae tempore cum minus eos a iure,
                        officiis, eius, consequuntur unde nulla, enim quibusdam
                        beatae.
                      </p>
                    </div>

                    <div className="grid-item d-none d-lg-block">
                      <img
                        src="img/pueblo02b.png"
                        className="img-fluid"
                        width="100%"
                      />
                    </div>
                  </div>
                </div>

                <div style={{ backgroundColor: "#fff" }}>
                  <div className="grid-container pt-4 pb-1 pb-lg-3 px-0 px-lg-5">
                    <div className="grid-item">
                      <img
                        src="img/pueblo03a.png"
                        className="img-fluid"
                        width="100%"
                      />
                    </div>

                    <div className="grid-item">
                      <h1 className="mt-4 mb-0 my-lg-2">LOREM IPSUM</h1>

                      <p className="small p-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Explicabo velit quis iusto magnam cupiditate
                        dolorum repudiandae tempore cum minus eos a iure,
                        officiis, eius, consequuntur unde nulla, enim quibusdam
                        beatae.
                      </p>
                    </div>

                    <div className="grid-item d-none d-lg-block">
                      <img
                        src="img/pueblo03b.png"
                        className="img-fluid"
                        width="100%"
                      />
                    </div>
                  </div>
                </div>
              </Carousel>
            </ul>
          </div>

          {/* <a className="d-none d-md-block prev" href="#">
            <i className="fas fa-angle-left fa-2x" style={{ color: "#3E92BD" }}></i>
          </a>

          <a className="d-none d-md-block next" href="#">
            <i
              className="fas fa-angle-right fa-2x"
              style={{ color: "#3E92BD" }}
            ></i>
          </a> */}

          <div className="controller">
            <div className="indicate-area"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DownTown;
