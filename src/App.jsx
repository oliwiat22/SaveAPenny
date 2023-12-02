import React from 'react';
import './App.css';

function App() {
  return (
      <div className="App">
        <h1>Save a penny</h1>

        <div className="card">
          {"Save a penny, stack up many."}
        </div>

        <div className="buttons-container">
          <button className="expense-button">Wydatki</button>
          <button className="income-button">Przychód</button>
          <button className="shopping-button">Moja lista zakupów</button>
        </div>
      </div>
  );
}

export default App;
