import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import AutoGrid from '../AutoGrid';
import Dogimages from '../Dogimages';
import Working from '../Working';
import Experts from '../Experts';
import Customers from '../Customers';
function Home() {
  return (
    <div className="Main">
      <HeroSection />
      <AutoGrid />
      <Dogimages />
      <Working />
      <Experts />
      <Customers />
    </div>
  );
}

export default Home;
