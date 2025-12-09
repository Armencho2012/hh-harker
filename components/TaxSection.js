// components/TaxSection.js
import React, { useState } from 'react';
import './TaxSection.css';

const TaxSection = ({ title, data, isDetailed }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Օգտագործում ենք ինտերակտիվ բացվող բաժիններ
  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  const renderContent = (item, index) => {
    if (item.type === 'list') {
      return (
        <ul className="tax-list" key={index}>
          {item.content.map((listItem, liIndex) => (
            <li key={liIndex}>{listItem}</li>
          ))}
        </ul>
      );
    } else if (item.type === 'table') {
      // Պարզեցված աղյուսակ React-ի համար
      return (
        <table className="tax-table" key={index}>
          <thead>
            <tr>{item.headers.map((h, hi) => <th key={hi}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {item.rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => <td key={ci}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      return <p key={index}>{item.content}</p>;
    }
  };

  return (
    <section className={`tax-section ${isDetailed ? 'detailed' : 'summary'}`}>
      <h2 className="section-title" onClick={toggleSection}>
        {title} 
        <span className="toggle-icon">{isOpen ? '▼' : '►'}</span>
      </h2>
      
      {isOpen && (
        <div className="section-content">
          {data.map(renderContent)}
        </div>
      )}
      
    </section>
  );
};

export default TaxSection;