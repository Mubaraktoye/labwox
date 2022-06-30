import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Search from '../Search';
import MyCard from '../MyCard';


function Home() {
  return (
    <>
      <HeroSection />
    <MyCard/>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
