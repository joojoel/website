import React from 'react';
import '../App.css';
import { Button } from "./Button";
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h2>Welcome!</h2>
      <p>
          This is the personal site of Joel Myöhänen, a second year computer science
          student at the University of Eastern finland. 
      </p>
      <div className='hero-btns'>
        <Button 
          className='btns' 
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Contact
        </Button>
        <Button 
          className='btns' 
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Info <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
