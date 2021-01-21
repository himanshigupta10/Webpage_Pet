import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
//import Placeholder from 'Placeholder';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h2>Home services on demand.</h2>
      <div className='hero-btns'>
    <Button className='btns'
    buttonStyle='btn--outline'
    buttonSize='btn--large'
    >
      GET STARTED
    </Button>    
         </div>
    </div>
  );
}

export default HeroSection;
