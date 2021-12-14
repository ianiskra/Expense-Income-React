import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    // Grab transactions stored at Global State
    const { transactions } = useContext(GlobalContext);

    // Track Amounts
    const amounts = transactions.map(transaction => transaction.amount);

    // Track Total Balance
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  
    // Calculate Income
    const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
  
    // Calculate Expense
    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    ).toFixed(2);


    return (
        <div className="inc-exp-container">
            {/* Display Green Income */}
            <div>
                <h4>Income</h4>
                <p className="money plus">${ income }</p>
            </div>
            {/* Display Red Expense */}
            <div>
                <h4>Expense</h4>
                <p className="money minus">${ expense }</p>
            </div>
        </div>
    )
}
