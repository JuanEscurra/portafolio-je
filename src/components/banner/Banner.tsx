import React from 'react'

import banner from '../../assets/banner-img.png';
import './banner.css';
import video from '../../assets/banner.mp4';

const Banner = () => {
  return (
    <div className="banner" id="inicio">
      <div className="banner_message">
        <h3 className="banner__title">
          Hola, soy <strong className="banner__name">JUAN ESCURRA</strong>
        </h3>
        <p className="banner__description">
          Un joven <strong className="text-important">desarrollador de software</strong> y apasionado por la tecnología.
        </p>
        <ul className="banner__social">
          <li className="banner__social-item">
            <a href="https://www.linkedin.com/in/juan-alexander-escurra-rodriguez-327a371a4/"
                target="_blank" rel="noopener">
              <i className="fab fa-linkedin fa-3x"></i>
            </a>
          </li>
          <li className="banner__social-item">
            <a href="https://github.com/JuanEscurra"
                target="_blank" rel="noopener">
                <i className="fab fa-github-square fa-3x"></i>
            </a>
          </li>
        </ul>
      </div>
      {/* <img className="banner__ilustration" src={banner}>
      </img> */}
    </div>
  )
}

export default Banner