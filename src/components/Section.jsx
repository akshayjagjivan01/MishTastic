import React, { useState } from 'react';

const Section = ({ id, title, icon, content }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <section 
      id={id} 
      className={`content-section ${isVisible ? 'visible' : ''}`}
      onMouseEnter={() => setIsVisible(true)}
    >
      <h2>{icon} {title}</h2>
      <div className="section-content">
        {content}
      </div>
    </section>
  );
};

export default Section;