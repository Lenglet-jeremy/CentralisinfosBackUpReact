import React from 'react';
import { Link } from 'react-router-dom';

import "./1.0.Footer.css"

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='ContainerFooter'>
        <div className='SectionFooter'>
            <li><Link to="/concerning">A propos</Link></li>
            <li><Link to="/concerning">Mentions légales</Link></li>
          <div className="about-tooltip">
          </div>
        </div>

        <div className='SectionFooter'>
          <h4>Liens Utiles</h4>
          <div>
              <Link to="/GCU">CGUs</Link>
              <Link to="/Privacy"> Politique de confidentialité</Link> 
              <Link to="/contact">Nous contacter</Link> 
          </div>
        </div>

        <div className='SectionFooter'>
          <h4>Suivez-nous</h4>
          <div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className='CopyrightFooter'>
        <p>© 2024 Centralisinfos. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
