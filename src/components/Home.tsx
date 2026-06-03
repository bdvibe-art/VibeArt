import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="featured-image-wrapper">
        <img 
          src="/images/Selfportrait.jpg" 
          alt="Featured Artwork" 
          className="featured-image"
        />
      </div>
      <div className="home-caption">
        <p>Utvalgt verk: Selvportrett</p>
      </div>
    </div>
  );
};

export default Home;
