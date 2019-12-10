/**
 *  @name: layout.jsx
 *  @version: 1.0.0
 *  @author: Trejocode - Sergio
 *  @description: Template de las páginas, preparada para SEO.
 */

import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

// Componentes
import Header from "../components/header";
import Footer from "../components/footer";
import Aside from "../components/aside";

/**
 *  @param: {String} title: "Título"
 *  @param: {String} description: "Descripción de la página"
 *  @param: {String} keywords: "Etiquetas, para, seo"
 */

const Layout = props => {
  const { title, description, keywords, children } = props;

  return (
    <Fragment>
      <Helmet>
        <title> {title || "Título"} </title>
        <meta
          name="description"
          content={description || "Descripción de la página"}
        />
        <meta name="keywords" content={keywords || "Etiquetas, para, seo"} />
      </Helmet>
      <div class="wrapper ">
        <Aside />
        <div class="main-panel">
          <Header />
          <div class="content">
            <div class="container-fluid">{children}</div>
          </div>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
