import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    // Creating a hook States
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);
    
    const onSubmit = e => {
        e.preventDefault();

        // Object for New Transaction
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        // Call from Global State
        addTransaction(newTransaction);
    }
    
    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Item Transacted</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} 
                    placeholder="Your Transaction..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                        (negative - expense, positive - income)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} 
                    placeholder="Enter amount..." />
                </div>
                {/* Add Trans based on click */}
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}
