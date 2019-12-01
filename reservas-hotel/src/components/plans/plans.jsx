/**
 *  @name: footer.jsx
 *  @version: 1.0.0
 *  @author: alexis
 *  @description: Componente plans
 */

import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Plans = () => {
  const [show, setshow] = useState(true);
  const [hover1, sethover1] = useState({
    height: "100%",
    show: false
  });
  const [hover2, sethover2] = useState({
    height: "100%",
    show: false
  });
  const [hover3, sethover3] = useState({
    height: "100%",
    show: false
  });
  const [hover4, sethover4] = useState({
    height: "100%",
    show: false
  });

  const show1 = () => {
    setshow(!show);
    sethover1({
      height: "25%",
      show: true
    });
  };
  const _show1 = () => {
    setshow(!show);
    sethover1({
      height: "100%",
      show: false
    });
  };
  const show2 = () => {
    setshow(!show);
    sethover2({
      height: "25%",
      show: true
    });
  };

  const _show2 = () => {
    setshow(!show);
    sethover2({
      height: "100%",
      show: false
    });
  };
  const show3 = () => {
    setshow(!show);
    sethover3({
      height: "25%",
      show: true
    });
  };
  const _show3 = () => {
    setshow(!show);
    sethover3({
      height: "100%",
      show: false
    });
  };
  const show4 = () => {
    setshow(!show);
    sethover4({
      height: "25%",
      show: true
    });
  };
  const _show4 = () => {
    setshow(!show);
    sethover4({
      height: "100%",
      show: false
    });
  };

  return (
    // <!--=====================================
    // PLANES
    // ======================================-->
    <>
      <div
        className="planes container-fluid bg-white p-0 pt-5 "
        style={{ maxWidth: 100 + "%" }}
        id="planes"
      >
        <div className="container p-0">
          <div className="grid-container">
            <div className="grid-item">
              <h1 className="text-center py-3 py-lg-5 tituloPlan">
                BIENVENIDO
              </h1>

              {show ? (
                <p className="text-muted text-left px-4 descripcionPlan">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                  deleniti quidem minus voluptatibus repellendus error,
                  excepturi quam, iste vitae tenetur fugiat possimus in. In iure
                  cum facilis, saepe, libero accusantium.
                </p>
              ) : null}
              {hover1.show ? (
                <p className="text-muted text-left px-4 descripcionPlan">
                  1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iure deleniti quidem minus voluptatibus repellendus error,
                  excepturi quam, iste vitae tenetur fugiat possimus in. In iure
                  cum facilis, saepe, libero accusantium.
                </p>
              ) : null}
              {hover2.show ? (
                <p className="text-muted text-left px-4 descripcionPlan">
                  2 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iure deleniti quidem minus voluptatibus repellendus error,
                  excepturi quam, iste vitae tenetur fugiat possimus in. In iure
                  cum facilis, saepe, libero accusantium.
                </p>
              ) : null}
              {hover3.show ? (
                <p className="text-muted text-left px-4 descripcionPlan">
                  3 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iure deleniti quidem minus voluptatibus repellendus error,
                  excepturi quam, iste vitae tenetur fugiat possimus in. In iure
                  cum facilis, saepe, libero accusantium.
                </p>
              ) : null}
              {hover4.show ? (
                <p className="text-muted text-left px-4 descripcionPlan">
                  4 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iure deleniti quidem minus voluptatibus repellendus error,
                  excepturi quam, iste vitae tenetur fugiat possimus in. In iure
                  cum facilis, saepe, libero accusantium.
                </p>
              ) : null}
            </div>

            <div
              className="grid-item  d-none d-lg-block"
              data-toggle="modal"
              data-target="#modalPlanes"
              onMouseOut={() => _show1()}
              onMouseOver={() => show1()}
            >
              <figure
                className="text-center ocultar"
                style={hover1}
                name="pr"
                id="figure"
              >
                <h1> PLAN ROMÁNTICO</h1>
              </figure>

              <img
                src="img/plan-romantico.png"
                className="img-fluid"
                width="100%"
                alt="romantic plan"
              />
            </div>

            <div
              className="grid-item d-none d-lg-block"
              data-toggle="modal"
              data-target="#modalPlanes"
              onMouseOut={() => _show2()}
              onMouseOver={() => show2()}
            >
              <figure className="text-center ocultar2" style={hover2}>
                <h1> PLAN LUNA DE MIEL</h1>
              </figure>

              <img
                src="img/luna-de-miel.png"
                className="img-fluid"
                width="100%"
                alt="honey moon"
              />
            </div>

            <div
              className="grid-item d-none d-lg-block"
              data-toggle="modal"
              data-target="#modalPlanes"
              onMouseOut={() => _show3()}
              onMouseOver={() => show3()}
            >
              <figure className="text-center" style={hover3}>
                <h1> PLAN AVENTURA</h1>
              </figure>

              <img
                src="img/plan-aventura.png"
                className="img-fluid"
                width="100%"
                alt="adventure plan"
              />
            </div>

            <div
              className="grid-item d-none d-lg-block"
              data-toggle="modal"
              data-target="#modalPlanes"
              onMouseOut={() => _show4()}
              onMouseOver={() => show4()}
            >
              <figure className="text-center" style={hover4}>
                <h1> PLAN SPA</h1>
              </figure>

              <img
                src="img/plan-spa.png"
                alt="spa plan"
                className="img-fluid"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
