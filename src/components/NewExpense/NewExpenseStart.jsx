import React from "react";

const NewExpenseStart = (props) => {
	return (
		<div className="new-expense__actions">
			<button onClick={props.onClick}>Add New Expense</button>
		</div>
	);
};

export default NewExpenseStart;