import React, { useState } from 'react';
import './ExpensePage.css';

const ExpensePage = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ name: '', cost: 0 });

  const addExpense = () => {
    setExpenses([...expenses, newExpense]);
    setNewExpense({ name: '', cost: 0 });
  };

  const calculateTotalExpenses = () => {
    return expenses.reduce((total, expense) => total + expense.cost, 0);
  };

  return (
    <div className="expense-tracker-container">
      <div className="table-container">
        <h2>Nowy wydatek?</h2>
        <table>
          <thead>
            <tr>
              <th>Nazwa</th>
              <th>Koszt</th>
              <th>Suma</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.name}</td>
                <td>{expense.cost}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td>{calculateTotalExpenses()}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="form-container">

        <div>
          <label>Nazwa:</label>
          <input
            type="text"
            value={newExpense.name}
            onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })}
          />
        </div>

        <div>
          <label>Koszt:</label>
          <input
            type="number"
            value={newExpense.cost}
            onChange={(e) => setNewExpense({ ...newExpense, cost: parseFloat(e.target.value) || 0 })}
            step="0.01"
            min="0"
          />
        </div>

      <button className='accept' onClick={addExpense}>Dodaj wydatek</button>
      </div>
    </div>
  );
};

export default ExpensePage;
