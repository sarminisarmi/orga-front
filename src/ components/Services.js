import React from 'react';
import './Services.css'; // Separate CSS file for styling

const Services = () => {
  return (
    <div className="services-section">
      <div className="left-panel">
        <h2>For All Your Gardening Needs</h2>
        <p>Home Gardening Supplies and Gifts</p>
      </div>
      <div className="right-panel">
        <div className="service-item">
          <img src="/icons/gardening-service.png" alt="Gardening Service" />
          <h3>Gardening Services</h3>
          <p>A beautiful garden can transform a property. Whether you're trying to recreate the gardens.</p>
          <button className="read-more-btn">Read More</button>
        </div>
        <div className="service-item">
          <img src="/icons/plant-planting.png" alt="Plants Planting" />
          <h3>Plants Planting</h3>
          <p>Whether you choose to eat vegetarian or just want to eat a little healthier in a greenhouse.</p>
          <button className="read-more-btn">Read More</button>
        </div>
        <div className="service-item">
          <img src="/icons/gardening-tools.png" alt="Gardening Tools" />
          <h3>Gardening Tools</h3>
          <p>Gardening tools help you maintain and recreate your green spaces with ease.</p>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
