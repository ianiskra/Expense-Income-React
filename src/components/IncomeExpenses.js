import React from 'react'

export const IncomeExpenses = () => {
    return (
        <div className="inc-exp-container">
            {/* Income Tracking*/}
            <div>
                <h4>Income</h4>
                <p className="money plus">+$0.00</p>
            </div>
            {/* Expenses Tracking */}
            <div>
                <h4>Expense</h4>
                <p className="money minus">-$0.00</p>
            </div>
        </div>
    )
}
