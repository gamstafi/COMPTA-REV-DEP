import React, { useState } from 'react';

    function TransactionForm() {
      const [transactions, setTransactions] = useState([]);
      const [revenue, setRevenue] = useState(0);
      const [expense, setExpense] = useState(0);
      const [taxRate, setTaxRate] = useState(0);

      const addTransaction = (type, amount) => {
        setTransactions([...transactions, { type, amount }]);
        if (type === 'revenue') setRevenue(revenue + amount);
        if (type === 'expense') setExpense(expense + amount);
      };

      const calculateTax = () => {
        return (revenue * taxRate) / 100;
      };

      const netResult = revenue - expense - calculateTax();

      return (
        <div>
          <h2>Saisir les transactions</h2>
          <button onClick={() => addTransaction('revenue', 100)}>Ajouter revenu</button>
          <button onClick={() => addTransaction('expense', 50)}>Ajouter dépense</button>
          <input
            type="number"
            value={taxRate}
            onChange={(e) => setTaxRate(Number(e.target.value))}
            placeholder="Taux d'imposition"
          />
          <div>
            <p>Total: {revenue}</p>
            <p>Impôt: {calculateTax()}</p>
            <p>Résultat net: {netResult}</p>
          </div>
        </div>
      );
    }

    export default TransactionForm;
