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

  // Apply custom ordering for 'Lys og natur'
  const displayPaintings = [...filteredPaintings];
  if (activeFilter === 'Lys og natur') {
    const customOrder = [
      'Snart blåtime på Varden',
      'Svaner i desember sol',
      'Over Slagfjellet',
      'Frognerbekken',
      'Veslesetra',
      'Kvitfjell desember II',
      'Kvitfjell solnedgang',
      'Zermatters',
      'Skilek',
      'Skihopp',
      'Utsikt fra Veslefjellet',
      'Møllafossen',
      'Akerselva',
      'Flokk',
      'Morgenbad på Røst',
      'Midnattsol i Lofoten',
      'Sommertur på Hvaler',
      'Nattbad',
      'Trenyken',
      'Marokko',
      'Korsika fjell',
      'Kvitfjell desember',
      'Frognerelva'
    ].map(t => t.toLowerCase().trim());

    displayPaintings.sort((a, b) => {
      const titleA = a.title.toLowerCase().trim();
      const titleB = b.title.toLowerCase().trim();
      
      const indexA = customOrder.indexOf(titleA);
      const indexB = customOrder.indexOf(titleB);

      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
      return 0;
    });
  }

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
        {displayPaintings.map((painting) => (
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
