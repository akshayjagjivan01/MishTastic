import React, { useState } from 'react';

const SpecialButton = ({ onClick, className, label }) => {
  const [isPressed, setIsPressed] = useState(false);
  
  const handleClick = () => {
    setIsPressed(true);
    onClick();
    setTimeout(() => setIsPressed(false), 300);
  };
  
  return (
    <button 
      className={`special-button ${className} ${isPressed ? 'pressed' : ''}`} 
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default SpecialButton;