import React, { useState } from 'react';
import './IncomePage.css';

const IncomePage = () => {
  const [incomes, setIncomes] = useState([]);
  const [newIncome, setNewIncome] = useState({ name: '', cost: 0 });

  const addIncome = () => {
    setIncomes([...incomes, newIncome]);
    setNewIncome({ name: '', cost: 0 });
  };

  const calculateTotalIncomes = () => {
    return incomes.reduce((total, incomes) => total + income.cost, 0);
  };

  return (
    <div className="income-tracker-container">
      <div className="table-container">
        <h2>Nowy wydatek?</h2>
        <table>
          <thead>
            <tr>
              <th>Nazwa</th>
              <th>Przychód</th>
              <th>Suma</th>
            </tr>
          </thead>
          <tbody>
            {incomes.map((income, index) => (
              <tr key={index}>
                <td>{income.name}</td>
                <td>{income.cost}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td>{calculateTotalIncomes()}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="form-container">

        <div>
          <label>Nazwa:</label>
          <input
            type="text"
            value={newIncome.name}
            onChange={(e) => setNewIncome({ ...newIncome, name: e.target.value })}
          />
        </div>

        <div>
          <label>Przychód:</label>
          <input
            type="number"
            value={newIncome.cost}
            onChange={(e) => setNewIncome({ ...newIncome, cost: parseFloat(e.target.value) || 0 })}
            step="0.01"
            min="0"
          />
        </div>

      <button className='accept' onClick={addIncome}>Dodaj przychód</button>
      </div>
    </div>
  );
};

export default IncomePage;
