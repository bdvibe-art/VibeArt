import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import StaticPage from './components/StaticPage';
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState('home');

  const renderContent = () => {
    switch (currentTab) {
      case 'home':
        return <Home />;
      case 'about':
        return (
          <StaticPage 
            title="Om meg" 
            content={
              <>
                <p>Jeg er en engasjert kunstner basert i Oslo, og har nylig fullført mine studier ved Einar Granums Kunstfagskole. Min kunstneriske reise inkluderer også en 3-årig billedkunstutdanning ved Nydalen Kunstskole.</p>
                <p>Tematisk jobber jeg mye med naturmalerier, nordisk lys, akt og portrett. Jeg maler hovedsakelig med olje og akryl, og utforsker skjæringspunktet mellom natur og formidling.</p>
                <p>Med en bakgrunn fra ledende roller i Hermès Oslo og IBM, bringer jeg med meg en strukturert tilnærming og et sterkt fokus på kommunikasjon til mitt kunstneriske arbeid.</p>
                
                <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Utdanning</h3>
                <ul className="education-list">
                  <li><strong>2023 – 2026:</strong> Einar Granums Kunstfagskole (Visuelle kunstfag, maleri)</li>
                  <li><strong>2021 – 2023:</strong> Nydalen Kunstskole (3-årig billedkunstutdanning)</li>
                  <li><strong>2018 – 2019:</strong> Handelshøyskolen BI (Retorikk, Kommunikasjon og ledelse)</li>
                  <li><strong>2002 – 2005:</strong> Universitetet i Oslo (Bachelor i Fransk Litteratur)</li>
                </ul>
              </>
            } 
          />
        );
      case 'portfolio':
        return <Portfolio />;
      case 'exhibitions':
        return (
          <StaticPage 
            title="Utstillinger" 
            content={
              <div className="exhibition-timeline">
                <div className="exhibition-item">
                  <h4>2026 – Vårutstilling</h4>
                  <p>Einar Granum Kunstfagskole, Vulkan 17, Oslo</p>
                </div>
                <div className="exhibition-item">
                  <h4>2024 – Vårutstilling</h4>
                  <p>Einar Granum Kunstfagskole, Vulkan 17, Oslo</p>
                </div>
                <div className="exhibition-item">
                  <h4>2023 – Sommerutstilling</h4>
                  <p>Nydalen Kunstskole, Gjerdrums vei 10D, Nydalen, Oslo</p>
                </div>
                <div className="exhibition-item">
                  <h4>2022 – Sommerutstilling</h4>
                  <p>Nydalen Kunstskole, Arups gate 5, Gamlebyen, Oslo</p>
                  <p className="description">Innvielse av skolens nye lokaler og den første fysiske utstillingen etter pandemien.</p>
                </div>
                <div className="exhibition-item">
                  <h4>2021 – Digital Sommerutstilling</h4>
                  <p>Nydalen Kunstskole (Online)</p>
                </div>
              </div>
            } 
          />
        );
      case 'contact':
        return (
          <StaticPage 
            title="Contact" 
            content={
              <>
                <p>For forespørsler om oppdrag eller kjøp av verk, vennligst ta kontakt.</p>
                <div style={{ marginTop: '2rem' }}>
                  <p><strong>Adresse:</strong> Sigyns gate 2A, 0260 Oslo</p>
                  <p><strong>Telefon:</strong> +47 940 21 100</p>
                  <p><strong>E-post:</strong> bdvibe@gmail.com</p>
                </div>
              </>
            } 
          />
        );
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main className="content-area">
        <div className="content-wrapper">
          {renderContent()}
        </div>
        <footer className="mobile-footer">
          <p>&copy; {new Date().getFullYear()} Bjørg de Vibe</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
