import React, { useState } from 'react';
import "./NewExpense.css"

import NewExpenseStart from './NewExpenseStart';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
	const [addingNewExpense, setAddingNewExpense] = useState(false);

	const cancelNewExpense = () => {
		setAddingNewExpense(false);
	}

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(), // Not unique id, but it's a demo, what are you expecting
		};
		props.onAddExpense(expenseData);
		cancelNewExpense();
	};

	const newExpenseStartClickHandler = (event) => {
		setAddingNewExpense(true);
	}

	const cancelNewExpenseHandler = (event) => {
		cancelNewExpense();
	}

	return <div className="new-expense">
		{addingNewExpense === false && <NewExpenseStart onClick={newExpenseStartClickHandler} />}
		{addingNewExpense === true && <ExpenseForm 
			onCancel={cancelNewExpenseHandler} 
			onSaveExpenseData={saveExpenseDataHandler}/>
		}
	</div>
};

export default NewExpense;