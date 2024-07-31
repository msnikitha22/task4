import React from 'react';

const Services = () => {
  return (
    <div style={styles.services}>
      <h2>Our Services</h2>
      <div style={styles.serviceList}>
        <div style={styles.serviceItem}>Car Sales</div>
        <div style={styles.serviceItem}>Car Financing</div>
        <div style={styles.serviceItem}>Car Maintenance</div>
      </div>
    </div>
  );
};

const styles = {
  services: {
    padding: '50px 20px',
    textAlign: 'center'
  },
  serviceList: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px'
  },
  serviceItem: {
    width: '30%',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '5px'
  }
};

export default Services;
