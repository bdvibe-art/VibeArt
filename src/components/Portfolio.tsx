import React, { useState } from 'react';
import { paintings } from '../data/paintings';
import type { Category } from '../data/paintings';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('Alle');

  const filters: Category[] = ['Alle', 'Abstraksjon', 'Lys og natur', 'Nært og Kjært'];

  const filteredPaintings = activeFilter === 'Alle' 
    ? paintings 
    : paintings.filter(p => p.category === activeFilter);

  return (
    <div className="portfolio-container">
      <div className="portfolio-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      
      <div className="portfolio-grid">
        {filteredPaintings.map((painting) => (
          <div key={painting.id} className="portfolio-item animate-in">
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
    </div>
  );
};

export default Portfolio;
