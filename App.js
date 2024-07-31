import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
