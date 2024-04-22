// Tablon.jsx
import React, { useState, useEffect } from 'react';
import './Tablon.css';

const Tablon = () => {
  const [notas, setNotas] = useState(() => {
    const storedNotas = localStorage.getItem('notas');
    return storedNotas ? JSON.parse(storedNotas) : Array(30).fill('');
  });

  useEffect(() => {
    localStorage.setItem('notas', JSON.stringify(notas));
  }, [notas]);

  const handleNotaChange = (index, content) => {
    const nuevasNotas = [...notas];
    nuevasNotas[index] = content;
    setNotas(nuevasNotas);
  };

  const ordenEspecifico = [
    1, 2, 3, 4, 14, 15, 17, 18, 19, 20, 21, 22, 23, 27, 28, 30, 34, 35, 36, 37, 38, 40,
    41, 46, 47, 52, 56, 58, 66, 67
  ];

  return (
    <div className="tablon">
      {ordenEspecifico.map((numero, index) => (
        <div key={numero} className="nota">
          <span className="numero">{numero}</span>
          <textarea
            className="texto-area"
            value={notas[index]}
            onChange={(e) => handleNotaChange(index, e.target.value)}
            placeholder=""
          />
        </div>
      ))}
    </div>
  );
};

export default Tablon;
