import React from 'react';
import './StaticPage.css';

interface StaticPageProps {
  title: string;
  content: string | React.ReactNode;
}

const StaticPage: React.FC<StaticPageProps> = ({ title, content }) => {
  return (
    <div className="static-page">
      <h2>{title}</h2>
      <div className="static-content">
        {typeof content === 'string' ? <p>{content}</p> : content}
      </div>
    </div>
  );
};

export default StaticPage;
