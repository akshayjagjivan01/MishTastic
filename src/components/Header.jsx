import React, { useEffect, useState } from 'react';

const Header = () => {
  const [bounce, setBounce] = useState(false);
  
  useEffect(() => {
    // Create a bouncing animation effect every few seconds
    const interval = setInterval(() => {
      setBounce(true);
      setTimeout(() => setBounce(false), 1000);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="site-header">
      <h1 className={bounce ? "bounce" : ""}>
        <span className="accent-text">M</span>ish
        <span className="accent-text">T</span>astic!
      </h1>
      <p className="subtitle">A celebration of the amazing person you are!</p>
    </header>
  );
};

export default Header;