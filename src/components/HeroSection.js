import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  
  return (
    <div className='hero-container'>
      
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      
      <h2 className='animate-charcter'>Powering Research Capabilities in Africa</h2>
      <p>Labwox provides cutting-edge solutions to support research and learning in the physical sciences</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Register
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Go to products <i className="fa-solid fa-rectangle-vertical-history"></i>
        </Button>
        
      
      </div>
      
    </div>
  );
}

export default HeroSection;
