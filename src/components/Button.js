import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

// Has two constant values for styles and sizes
const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

// 
export const Button = ({
children,
type,
onClick,
buttonStyle,
buttonSize,
path
}) => {
  // If buttonStyle in STYLES checkButtonStyle = buttonStyle, else = 0
  const checkButtonStyle = STYLES.includes(buttonStyle) 
  ? buttonStyle 
  : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize :
  SIZES[0];

  return (
    <Link 
      to='/'
      className='btn-mobile'
    >
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  )
}