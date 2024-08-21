import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>

      <div className='footer-subscription'>
        <div className='footer-subscription-heading'>
          <h2 id = "contact">Contact information</h2>
        </div>
        <p>joeleppu@gmail.com</p>
      </div>

      <div className='footer-links'>

        <div className='footer-link-items'>
          <Link
              class='social-icon-link'
              to='https://github.com/joojoel'
              target='_blank'
              aria-label='Github'
            >
              Github
            </Link>
        </div>

        <div className='footer-link-items'>
            <Link
              class='social-icon-link'
              to='https://www.linkedin.com/in/joel-my%C3%B6h%C3%A4nen-b1094320a/'
              target='testi'
              aria-label='LinkedIn'
            >
              LinkedIn
            </Link>
        </div>

      </div>
    </div>
  );
}

export default Footer;
