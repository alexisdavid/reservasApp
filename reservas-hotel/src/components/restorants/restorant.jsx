import React, { useState } from "react";
import Collapse from "@kunukn/react-collapse";

const Restaurant = () => {
  const [show, setShow] = useState(false);
  const [showPrincipal, setShowPrincipal] = useState(true);

  const ocultar = () => {
    setShow(!show);
    // setShowPrincipal(!showPrincipal);
  };

  //   const ocultarp = () => {
  //     setShowPrincipal(!showPrincipal);
  //     setShow(!show);
  //   };
  return (
    // <!--=====================================
    // RESTAURANTE
    // ======================================-->
    <div>
      <div className="fondoRestaurante container-fluid"></div>

      <div className="restaurante container-fluid pt-5" id="restaurante">
        <div className="container">
          <div className="grid-container">
            <Collapse isOpen={show}>
              <div className="grid-item carta">
                <div className="row p-1 p-lg-5">
                  <div className="col-6 col-md-4 text-center p-1">
                    <img
                      src="img/plato01.png"
                      className="img-fluid w-50 rounded-circle"
                    />

                    <p className="py-2">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                  </div>

                  <div className="col-6 col-md-4 text-center p-1">
                    <img
                      src="img/plato02.png"
                      className="img-fluid w-50 rounded-circle"
                    />

                    <p className="py-2">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                  </div>

                  <div className="col-6 col-md-4 text-center p-1">
                    <img
                      src="img/plato03.png"
                      className="img-fluid w-50 rounded-circle"
                    />

                    <p className="py-2">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                  </div>

                  <div className="col-6 col-md-4 text-center p-1">
                    <img
                      src="img/plato04.png"
                      className="img-fluid w-50 rounded-circle"
                    />

                    <p className="py-2">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                  </div>

                  <div className="col-6 col-md-4 text-center p-1">
                    <img
                      src="img/plato05.png"
                      className="img-fluid w-50 rounded-circle"
                    />

                    <p className="py-2">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                  </div>

                  <div className="col-6 col-md-4 text-center p-1">
                    <img
                      src="img/plato06.png"
                      className="img-fluid w-50 rounded-circle"
                    />

                    <p className="py-2">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                  </div>

                  <div className="col-12 text-center d-block d-lg-none">
                    <button
                      onClick={() => ocultar()}
                      className="btn btn-warning text-uppercase mb-5 volverCarta"
                    >
                      Ocultar Menú
                    </button>
                  </div>
                </div>
              </div>
            </Collapse>

            {showPrincipal ? (
              <div className="grid-item bloqueRestaurante">
                <h1 className="mt-4 my-lg-5">RESTAURANTE</h1>

                <p className="p-4 my-lg-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo beatae nemo, saepe iusto, voluptas fuga. Nesciunt
                  tempora nobis quia, officia at corporis sint sunt saepe quod
                  labore hic iusto totam.
                </p>

                <button
                  onClick={() => ocultar()}
                  className="btn btn-warning text-uppercase mb-5 verCarta"
                >
                  Ver la carta
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
