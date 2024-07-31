import React from 'react';

const Hero = () => {
  return (
    <div style={styles.hero}>
      <h1>Welcome to CARZ</h1>
      <p>Your ultimate car buying experience</p>
    </div>
  );
};

const styles = {
  hero: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url(/carz.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    textAlign: 'center'
  },
};

export default Hero;
