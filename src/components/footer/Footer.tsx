import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer" id="contacto">
      <iframe
        id="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62391.283878936134!2d-76.97840409319396!3d-12.217424847859261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105bbdfbb504f6f%3A0x659e4e0dde2d7992!2sVilla%20el%20Salvador!5e0!3m2!1ses!2spe!4v1651697810811!5m2!1ses!2spe"
        width="50%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="footer__message">
        <h4 className="footer__title">Contactame en:</h4>
        <ul className="footer__list">
          <li className="footer__item">
            <a
              href="https://www.linkedin.com/in/juan-alexander-escurra-rodriguez-327a371a4/"
              target="_blank"
              rel="noopener"
              className="footer__link"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </li>
          <li className="footer__item">
            <a
              href="https://github.com/JuanEscurra"
              target="_blank"
              rel="noopener"
              className="footer__link"
            >
              <i className="fab fa-github-square fa-2x"></i>
            </a>
          </li>
        </ul>
				<p>
					&#169; {new Date().getFullYear()} Juan Escurra
				</p>
      </div>
    </div>
  );
};

export default Footer;
