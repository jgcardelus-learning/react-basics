import React, { useState } from "react";

import "./ExpenseForm.css"

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");
	
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: "",
	// 	enteredAmount: "",
	// 	enteredDate: "",
	// });

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);

		// setUserInput({
		// 	...userInput, // Copy last state
		// 	enteredTitle: event.target.value, // Override enteredTitle
		// });
		
		// This is the preferred way when you depend on the last state
		// States are scheduled and with the other form, you might not get the latest state
		// snapshot, this way ensures you get the latest state

		// setUserInput((prevState) => {
		// 	return {
		// 		...prevState,
		// 		enteredTitle: event.target.value,
		// 	};
		// });
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);

		// setUserInput({
		// 	...userInput, // Copy last state
		// 	enteredAmount: event.target.value, // Override enteredTitle
		// });
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);

		// setUserInput({
		// 	...userInput, // Copy last state
		// 	enteredAmount: event.target.value, // Override enteredTitle
		// });
	};
	
	const clearNewExpense = () => {
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	}

	const submitHandler = (event) => {
		event.preventDefault(); // Don't allow default behaviour
		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};
		clearNewExpense();
		props.onSaveExpenseData(expenseData);
	}

	const cancelHandler = (event) => {
		clearNewExpense();
		props.onCancel(event);
	}
	
	
	return <form onSubmit={submitHandler}>
		<div className="new-expense__controls">
			<div className="new-expense__control">
				<label>Title</label>
				<input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
			</div>

			<div className="new-expense__control">
				<label>Amount</label>
				<input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
			</div>

			<div className="new-expense__control">
				<label>Date</label>
				<input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
			</div>
		</div>
		<div className="new-expense__actions">
			<button onClick={cancelHandler}>Cancel</button>
			<button type="submit">Add Expense</button>
		</div>
	</form>
};

export default ExpenseForm;