/**
 *  @name: public.jsx
 *  @version: 1.0.0
 *  @author: Trejocode - Sergio
 *  @description: Página pública
 */

import React from "react";
import Layout from "./layout";
import CardsInfo from "../components/inicio/cards";
import HabitationCards from "../components/inicio/habitations";
import Calendar from "../components/inicio/calendar";

const PagePublic = () => (
  <Layout
    title="Inicio"
    description="Descripción de la página de Inicio"
    keywords="Reactjs, SEO Ready, Ejemplo"
  >
    <CardsInfo />
    <HabitationCards />
    <div class="row">
      <Calendar />
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12">
            <h3>hola</h3>
          </div>
          <div class="col-md-12">
            <h3>hola</h3>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default PagePublic;
