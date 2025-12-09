// App.js
import React from 'react';
import './App.css';
import TaxSection from './components/TaxSection';
import { taxData } from './data/TaxData';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>ՀՀ Հարկային Համակարգի Միասնական Ուղեցույց</h1>
        <p>Կրթական նախագիծ</p>
      </header>
      <main className="tax-dashboard">
        {taxData.map((section) => (
          <TaxSection 
            key={section.id} 
            title={section.title} 
            data={section.items} 
            isDetailed={section.isDetailed} 
          />
        ))}
      </main>
      <footer>
        <p>© 2025 Հարկային Ուղեցույց (Կրթական Նախագիծ)</p>
      </footer>
    </div>
  );
}

export default App;