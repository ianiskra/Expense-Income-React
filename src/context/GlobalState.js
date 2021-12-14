/* Global State - Create the useContext. 
This will wrap around the Components in App.js */
import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    // Global var of transactions
    transactions: []
}

// Create Context - Pass in Initial State
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    // Use Reducer Hook
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Action to Delete based on ID
    function deleteTransaction(id){
        // from useReducer
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    // Action to Add based on ID
    function addTransaction(transaction){
        // from useReducer
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
    <GlobalContext.Provider value={{
        // Access Transactions from any component using Use Context
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}