import React from 'react';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>CARZ</div>
      <ul style={styles.navItems}>
        <li style={styles.navItem}>Home</li>
        <li style={styles.navItem}>About</li>
        <li style={styles.navItem}>Services</li>
        <li style={styles.navItem}>Contact</li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#333',
    color: '#fff'
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  navItems: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px'
  },
  navItem: {
    cursor: 'pointer'
  }
};

export default NavBar;
