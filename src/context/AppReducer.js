/* How we Specify Applications State Changes */

export default (state, action) => {
    switch (action.type) {
        // State of Deletion
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                // filter out for each transaction is not of payload
                transactions: state.transactions.filter(transaction =>
                    transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                // Array returns trans existing in addition to what's in payload
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}