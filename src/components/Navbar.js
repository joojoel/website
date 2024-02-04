import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

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

      {/* Social floating menu */}
      <div className='social'>
        <div className='social-container' onClick={closeMobileMenu}>
          
          <div className='social-item'>
            <Link
              class='social-icon-link github'
              to='https://github.com/joojoel'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </Link>
          </div>

          <div className='social-item'>
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
      </div>

      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fa-solid fa-times' : 'fa-solid fa-bars'} />
          </div>
          
          <div className={click ? 'nav-menu active' : 'nav-menu'}>
            <div className='nav-item'>
              <Link
                className='nav-links'
                onClick={() => {
                  window.scrollTo(0, 0);
                  closeMobileMenu();
                }}
              >
                Home
              </Link>
            </div>
            <div className='nav-item'>
              <Link 
                className='nav-links'
                onClick={() => {
                  window.location.replace("/#skills");
                  closeMobileMenu();
                }}
              >
                Skills
              </Link>
            </div>
            <div className='nav-item'>
              <Link 
                className='nav-links'
                onClick={() => {
                  window.location.replace("/#projects");
                  closeMobileMenu();
                }}
              >
                Projects
              </Link>
            </div>
            <div className='nav-item'>
              <Link 
                to='' 
                className='nav-links' 
                onClick={closeMobileMenu}
              >
                CV
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
