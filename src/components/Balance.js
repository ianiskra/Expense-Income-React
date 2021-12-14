import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    // Grab transactions stored at Global State
    const { transactions } = useContext(GlobalContext);

    // Calculate total amounts
    const amounts = transactions.map(transaction => transaction.amount);
    // Total Balance
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div>
            <h4>Your Balance</h4>
            <h1>{ total }</h1>
        </div>
    )
}
