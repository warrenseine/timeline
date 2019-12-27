import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import './Home.scss';
import { ParticleBackground } from '../ParticleBackground/ParticleBackground';

export const Home: React.FC = () => {
  return (
    <div className="home">
     <header className="app-header name">
        <span>Benoît Jehanno <a className="pgp-key" href="http://keys.gnupg.net/pks/lookup?op=vindex&fingerprint=on&search=0xF8F8B083D7F09E1F"><i className="fa fa-key fa-fw"></i></a></span>
        <ul className="home-social-buttons">
          <li>
            <a href="https://twitter.com/DeKajoo"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
          </li>
          <li>
            <a href="https://github.com/beuted"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
          </li>
          <li>
            <a href="http://stackoverflow.com/users/2531058/dekajoo"><i className="fa fa-stack-overflow fa-fw"></i> <span className="network-name">Stack Overflow</span></a>
          </li>
          <li>
            <a href="https://dekajoo.itch.io/"><i className="fa fa-gamepad" aria-hidden="true"></i> <span className="network-name"> Itch.io</span></a>
          </li>
        </ul>
      </header>
      <div className="particle-background">
        <ParticleBackground canvasWidth={window.innerWidth} canvasHeight={window.innerHeight}></ParticleBackground>
      </div>
     
    </div>
  );
}