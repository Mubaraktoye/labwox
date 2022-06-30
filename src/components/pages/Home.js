import React from 'react';
import '../../App.css';

import HeroSection from '../HeroSection';
import Footer from '../Footer';

import MyCard from '../MyCard';


function Home() {
  return (
    <>
      <HeroSection />
      <MyCard />
      <Footer />
    </>
  );
}

export default Home;
