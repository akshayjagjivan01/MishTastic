import React, { useState, useEffect } from 'react';
import { FaStar, FaHeartbeat } from 'react-icons/fa';

const SpecialMessage = () => {
  const [isGlowing, setIsGlowing] = useState(false);
  
  useEffect(() => {
    // Create a glowing effect
    const interval = setInterval(() => {
      setIsGlowing(prev => !prev);
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={`special-message-container ${isGlowing ? 'glow' : ''}`}>
      <div className="special-message-icon">
        <FaHeartbeat size={40} className="heartbeat-icon" />
      </div>
      <div className="special-message-content">
        <h2><FaStar className="star-icon" /> For When You Need This Most <FaStar className="star-icon" /></h2>
        <p className="get-well-message">
          Hope you feel better soon, my love. Whatever you're going through right now, 
          I hope this brings a smile to your face.
        </p>
        <p className="important-message">
          I want you to know that you are <span className="highlight">incredibly important</span> to me. 
          More than words could ever express. You make every day brighter just by being you.
        </p>
      </div>
    </div>
  );
};

export default SpecialMessage;