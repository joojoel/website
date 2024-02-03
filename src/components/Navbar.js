import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {    
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const hideMenu = () => {
    if(window.innerWidth > 960) {
      closeMobileMenu();
    } 
  };
  
  // Listeners
  window.addEventListener('resize', showButton);
  window.addEventListener('resize', hideMenu);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='navbar-socials' onClick={closeMobileMenu}>

              <div className='nav-social'>
                <Link
                  class='social-icon-link github'
                  to='/'
                  target='_blank'
                  aria-label='Github'
                >
                  <i class='fab fa-github' />
                </Link>
              </div>

              <div className='nav-social'>
                <Link
                  class='social-icon-link linkedin'
                  to='/'
                  target='_blank'
                  aria-label='LinkedIn'
                >
                  <i class='fab fa-linkedin' />
                </Link>
              </div>

              <div className='nav-social'>
                <Link
                  class='social-icon-link twitter'
                  to='/'
                  target='_blank'
                  aria-label='LinkedIn'
                >
                  <i class='fas fa-envelope' />
                </Link>
              </div>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fa-solid fa-times' : 'fa-solid fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Introduction
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Skills
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                CV
              </Link>
            </li>
          </ul>
            {button && <Button buttonStyle='btn--outline'>
              Contact
            </Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
