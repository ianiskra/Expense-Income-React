/* Global State - Create the useContext. 
This will wrap around the Components in App.js */
import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

// Create Context - Pass in Initial State
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    // Use Reducer Hook
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        // Access Transactions from any component using Use Context
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>);
}