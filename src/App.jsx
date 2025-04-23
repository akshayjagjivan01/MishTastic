import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { FaWhatsapp, FaHeart, FaGraduationCap, FaSmile, FaStar } from 'react-icons/fa';
import './App.css';

// Components
import Header from './components/Header';
import Section from './components/Section';
import SpecialButton from './components/SpecialButton';
import SpecialMessage from './components/SpecialMessage';

function App() {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [showConfetti, setShowConfetti] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = React.createRef();

  // Update dimensions on window resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Show confetti for a limited time when component mounts
  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      if (!audioPlaying) {
        audioRef.current.play();
        setAudioPlaying(true);
        // Temporary confetti burst
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4000);
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setAudioPlaying(false);
      }
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+27649011930";
    const message = encodeURIComponent("Hey Baby! Just wanted to say you're amazing, I'm thinking of you and I want to say that i'm going to take care of myself 💕");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="App">
      {showConfetti && <Confetti width={dimensions.width} height={dimensions.height} />}
      
      <Header />
      
      <main>
        {/* Special message section at the top */}
        <SpecialMessage />
        
        <Section 
          id="smile" 
          title="That Gorgeous Smile" 
          icon={<FaSmile />}
          content={
            <>
              <p>Your smile lights up every room you enter, and that dimple? Pure magic! ✨</p>
              <div className="animated-emoji">😊</div>
            </>
          }
        />
        
        <Section 
          id="kindness" 
          title="Heart of Gold" 
          icon={<FaHeart />}
          content={
            <>
              <p>Your kindness knows no bounds - always thinking of others first and spreading joy wherever you go.</p>
              <div className="gif-container">
                <iframe 
                  src="https://giphy.com/embed/M90mJvfWfd5mbUuULX" 
                  width="100%" 
                  frameBorder="0" 
                  className="giphy-embed" 
                  allowFullScreen
                  title="Kindness gif"
                ></iframe>
              </div>
            </>
          }
        />
        
        <Section 
          id="dedication" 
          title="Unstoppable Dedication" 
          content={
            <>
              <p>Your commitment to everything you do is truly inspiring. Nothing can stop you when you set your mind to it!</p>
              <div className="gif-container">
                <iframe 
                  src="https://giphy.com/embed/12XDYvMJNcmLgQ" 
                  width="100%" 
                  frameBorder="0" 
                  className="giphy-embed" 
                  allowFullScreen
                  title="Dedication gif"
                ></iframe>
              </div>
            </>
          }
        />
        
        <Section 
          id="studies" 
          title="Conquering the Forbidden 'M' Word" 
          icon={<FaGraduationCap />}
          content={
            <>
              <p>We don't say the 'M' word around here 🤫, but whatever that advanced study thing is that you're doing - you're crushing it!</p>
              <div className="meme-container">
                <div className="meme">
                  <h3>Me: *About to say "Masters"*</h3>
                  <p>Mish: 👀</p>
                  <h3>Me: "That advanced academic pursuit thing..."</h3>
                  <p>Mish: 😌👍</p>
                </div>
              </div>
            </>
          }
        />
        
        <div className="buttons-container">
          <SpecialButton 
            onClick={playAudio} 
            className="proud-button"
            label={audioPlaying ? "Pause" : "Proud of You!"}
          />
          <SpecialButton 
            onClick={handleWhatsAppClick} 
            className="whatsapp-button"
            label={<><FaWhatsapp /> Say Hi</>}
          />
        </div>
        
        <audio ref={audioRef} onEnded={() => setAudioPlaying(false)}>
          <source src="/audio/proud-message.m4a" type="audio/x-m4a" />
          <source src="/audio/proud-message.m4a" type="audio/m4a" />
          Your browser does not support the audio element.
        </audio>
      </main>
      
      <footer>
        <p>Made with 💖 for Mish</p>
        <p className="small-note">PS: You'll need to add your own voice recording</p>
      </footer>
    </div>
  );
}

export default App;