// App.jsx
import React from 'react';
import Tablon from './components/Tablon';
import './App.css'

const App = () => {
  return (
    <div className="app">
      <div className="titulo">
        <h1>Salas de Zoom</h1>
      </div>
      <div className="tablon-container">
        <Tablon />
      </div>
    </div>
  );
};

export default App;
