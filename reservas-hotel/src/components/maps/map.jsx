import React from "react";

const Maps = () => {
  return (
    //         <!--=====================================
    // MAPA
    // ======================================-->
    <div className="mapa container-fluid bg-white p-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11734.080379475208!2d-86.84807474327388!3d21.08891791373395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf10263c481e9dc5d!2sMOFLES%20Y%20RADIADORES%20BONFIL!5e0!3m2!1ses-419!2smx!4v1575063750853!5m2!1ses-419!2smx"
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
      ></iframe>

      <div className=" p-4 info">
        <h3 className="mt-4">
          <strong>Visítanos</strong>
        </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

        <p>
          Apple inc.
          <br />
          Infinte Loop.
          <br />
          Cupertino, CA 95014
          <br />
          408-996-1010
        </p>

        <p className="pb-4">
          Email: info@apple.com
          <br />
          Tel: 1-800-676-2775
        </p>
      </div>
    </div>
  );
};

export default Maps;
