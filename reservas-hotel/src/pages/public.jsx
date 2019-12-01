/**
 *  @name: public.jsx
 *  @version: 1.0.0
 *  @author: Alexis
 *  @description: Página pública
 */

import React from "react";
import Layout from "./layout";
import Slider from "../components/slider/slider";
import Plans from "../components/plans/plans";
import Roms from "../components/roms/roms";
import PlansMovil from "../components/plans/plansMovil";
import DownTown from "../components/downtown/downtown";
import Restaurant from "../components/restorants/restorant";
import Contact from "../components/contact/contact";
import Maps from "../components/maps/map";

const PagePublic = () => (
  <Layout
    title="Inicio"
    description="Descripción de la página de Inicio"
    keywords="Reactjs, SEO Ready, Ejemplo"
  >
    <div className="public column">
      <div className="white-space-32"></div>
      <div className="justify-center">
        <div className="container">
          <div className="justify-center full"></div>
        </div>
      </div>
      <div className="white-space-32"></div>
      <Slider />

      <Plans></Plans>
      <Roms />
      <PlansMovil />

      <DownTown />
      <Restaurant />
      <Contact />
      <Maps />
      <div className="white-space-32"></div>
      <div style={{ paddingBottom: 40 + "px" }}>
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quam
        assumenda mollitia repellendus recusandae sequi quos nobis. Repellendus
        perspiciatis deserunt, assumenda quod veritatis dignissimos quam nisi
        possimus provident, nam illo? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fuga quod officia, illum facilis repellendus earum!
        Aperiam, voluptas quibusdam repudiandae animi quod, et id dolor amet
        nemo autem dolorum, corporis voluptate. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Rem dignissimos cupiditate pariatur
        recusandae eligendi laborum! Doloremque molestias, non debitis, illum
        natus animi alias perferendis quos nobis eaque aperiam officiis in! */}
      </div>
    </div>
  </Layout>
);

export default PagePublic;
