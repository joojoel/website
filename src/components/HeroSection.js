import React from 'react';
import '../App.css';
import { Button } from "./Button";
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h2 id='home'>Welcome!</h2>
        <p>
            This is the personal site of Joel
        </p>
      <div className='hero-btns'>
        <Button 
          onClick={() => {
            window.location.replace("/#contact");
          }}
          className='btns' 
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Contact
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
