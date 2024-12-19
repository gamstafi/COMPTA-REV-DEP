import React from 'react';
    import TransactionForm from './components/TransactionForm';
    import TransactionHistory from './components/TransactionHistory';
    import Filters from './components/Filters';
    import Charts from './components/Charts';
    import TaxCalculator from './components/TaxCalculator';
    import Reminder from './components/Reminder';
    import ImportTransactions from './components/ImportTransactions';
    import Reports from './components/Reports';
    import SavingsTracker from './components/SavingsTracker';
    import DarkModeToggle from './components/DarkModeToggle';

    function App() {
      return (
        <div className="App">
          <h1>Application de Comptabilité</h1>
          <DarkModeToggle />
          <TransactionForm />
          <TransactionHistory />
          <Filters />
          <Charts />
          <TaxCalculator />
          <Reminder />
          <ImportTransactions />
          <Reports />
          <SavingsTracker />
        </div>
      );
    }

    export default App;
