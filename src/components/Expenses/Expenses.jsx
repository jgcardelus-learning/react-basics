import React, { useState } from "react";
import "./Expenses.css";

import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

function Expenses(props) {
	let expenses = props.expenses;

	const [filteredYear, setFilteredYear] = useState("2020");
	const filterChangeHandler = (year) => {
		setFilteredYear(year);
	}
	
	const filteredExpenses = expenses.filter((expense) => { 
		return expense.date.getFullYear() === parseInt(filteredYear);
	});

	

	return (
		<Card className="expenses">
			<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
}

export default Expenses;