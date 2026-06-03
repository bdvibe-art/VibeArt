import React from 'react';
import './Sidebar.css';

interface SidebarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentTab, setCurrentTab }) => {
  const navItems = [
    { id: 'about', label: 'Om meg' },
    { id: 'portfolio', label: 'Portefølje' },
    { id: 'exhibitions', label: 'Utstillinger' },
    { id: 'contact', label: 'Kontakt' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 onClick={() => setCurrentTab('home')} style={{ cursor: 'pointer' }}>
          Bjørg de Vibe
        </h1>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={currentTab === item.id ? 'active' : ''}
                onClick={() => setCurrentTab(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-footer">
        <p>&copy; {new Date().getFullYear()} Bjørg de Vibe</p>
      </div>
    </aside>
  );
};

export default Sidebar;
