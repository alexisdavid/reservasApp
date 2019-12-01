/**
 *  @name: footer.jsx
 *  @version: 1.0.0
 *  @author: alexis
 *  @description: Componente plans
 */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const PlansMovile = () => {
  return (
    //         <!--=====================================
    // PLANES MÓVIL
    // ======================================-->

    <div
      className="d-block d-lg-none planesMovil jd-slider bg-white"
      id="planesMovil"
    >
      <h1 className="text-center py-3">PLANES</h1>

      <div className="slide-inner slide-area">
        <Carousel
          autoPlay={false}
          infiniteLoop={false}
          centerMode
          centerSlidePercentage={50}
          emulateTouch
          width={100 + "%"}
          dynamicHeight
        >
          <div>
            <img src="img/plan-romantico.png" />
            {/* <h6 className="py-2 text-center">ROMÁNTICO</h6> */}
          </div>

          <div>
            {/* <a
                href="#modalPlanes"
                data-toggle="modal"
                descripcion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dicta fugiat nihil amet officiis, atque molestiae velit, quod repudiandae asperiores illum accusantium ullam, necessitatibus excepturi inventore, mollitia est vitae impedit."
              > */}
            <img src="img/luna-de-miel.png" />
            {/* <h6 className="py-2 text-center">LUNA DE MIEL</h6>
              </a> */}
          </div>

          <div>
            {/* <a
                href="#modalPlanes"
                data-toggle="modal"
                descripcion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt blanditiis nulla expedita nostrum vero. Laborum repudiandae numquam mollitia earum natus ut delectus quas, iste unde doloribus suscipit qui, voluptate perspiciatis."
              > */}
            <img src="img/plan-aventura.png" />
            {/* <h6 className="py-2 text-center">AVENTURA</h6>
              </a> */}
          </div>

          <div>
            {/* <a
                href="#modalPlanes"
                data-toggle="modal"
                descripcion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quibusdam magni atque provident, quaerat libero harum possimus. Illum iure magni voluptate, quos amet! Ipsam, sit, sapiente. Cumque est officiis in!"
              > */}
            <img src="img/plan-spa.png" />
            {/* <h6 className="py-2 text-center">SPA</h6>
              </a> */}
          </div>
        </Carousel>

        <a className="prev" href="#">
          <i className="fas fa-angle-left text-muted"></i>
        </a>

        <a className="next" href="#">
          <i className="fas fa-angle-right text-muted"></i>
        </a>
      </div>

      <div className="controller">
        <div className="indicate-area"></div>
      </div>
    </div>
  );
};
export default PlansMovile;
