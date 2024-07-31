import React from 'react';

const About = () => {
  return (
    <div style={styles.about}>
      <h2>About Us</h2>
      <p>We are a leading car dealership offering the best deals on new and used cars.</p>
    </div>
  );
};

const styles = {
  about: {
    padding: '50px 20px',
    textAlign: 'center'
  }
};

export default About;
