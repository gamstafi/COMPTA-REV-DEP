import React from 'react';

    function TransactionHistory({ transactions }) {
      return (
        <div>
          <h2>Historique des transactions</h2>
          <ul>
            {transactions.map((transaction, index) => (
              <li key={index}>{transaction.type}: {transaction.amount}</li>
            ))}
          </ul>
        </div>
      );
    }

    export default TransactionHistory;
