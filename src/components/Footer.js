import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-subscription'>
        <div className='footer-subscription-heading'>
          <h1 id = "contact">Contact information</h1>
        </div>
        <p>joeleppu@gmail.com</p>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>

            <Link
              class='social-icon-link github'
              to='https://github.com/joojoel'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </Link>

            <Link
              class='social-icon-link linkedin'
              to='https://www.linkedin.com/in/joel-my%C3%B6h%C3%A4nen-b1094320a/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
