import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
    // Call Action from Global State
    const { deleteTransaction } = useContext(GlobalContext);

    // + or - Transactions
    const sign = transaction.amount < 0 ? '-' : '+';
    
    return (
        // Red or Green color transaction
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {/* Income or Expense Signs */}
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            
            {/* Delete Action based on click */}
            <button onClick={() => deleteTransaction(transaction.id) } className="delete-btn">X</button>
        </li>
    )
}
