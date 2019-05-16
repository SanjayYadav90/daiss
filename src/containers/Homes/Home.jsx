import React from 'react'
import Banner from './Banner';
import Services from './Services';
import About from './About';
import Testimonials from './Testimonials';
import News from './News';
import LearningCenter from './LearningCenter';

function Home() {
  return (
    <div>
      <Banner />
      <Services />
      <About />
      <Testimonials />
      <News />
      <LearningCenter />
    </div>
  )
}

export default Home
