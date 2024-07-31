import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div>Contact Us: contact@carz.com</div>
      <div>&copy; 2024 CARZ. All rights reserved.</div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '20px',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center'
  }
};

export default Footer;
