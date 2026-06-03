import React from 'react';
import { paintings } from '../data/paintings';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-grid">
      {paintings.map((painting) => (
        <div key={painting.id} className="portfolio-item">
          <div className="portfolio-image-container">
            <img src={painting.image} alt={painting.title} loading="lazy" />
          </div>
          <div className="portfolio-info">
            <h3>{painting.title}</h3>
            {painting.medium && <p>{painting.medium}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
