import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Regístrese para recibir el boletín</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                Suscribir
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contáctenos</h4>
              <div>
                <address className="text-white fs-6">
                Gendarme Argentino 1229 <br /> Ushuaia, Tierra del Fuego
                </address>
                <a
                  href="tel:2901555977"
                  className="mt-3 d-block mb-1 text-white"
                >
                 2901555977
                </a>
                <a
                  href="mailto:Dev.Dev@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  Dev.Dev@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="#">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Información</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                Politica de Privacidad
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                Politica de Reembolso
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                Politica de Envíos
                </Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">
                Terminos y Condiciones
                </Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Cuenta</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Sobre Nosotros</Link>
                <Link className="text-white py-2 mb-1">Preguntas Frecuentes</Link>
                <Link className="text-white py-2 mb-1">Contacto</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Atajos</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Notebooks</Link>
                <Link className="text-white py-2 mb-1">Auriculares</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Relojes</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Dev.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
