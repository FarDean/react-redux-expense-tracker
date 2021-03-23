import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DateTimePicker } from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import { Expense } from "./../models/Expense";

const useStyles = makeStyles(theme => ({
	container: {
		display: "flex",
		flexWrap: "wrap",
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 250,
	},
}));

export const AddExpense = () => {
	const classes = useStyles();
	const today = new Date().toJSON().toString().slice(0, 19);

	// const [expense, setExpense] = useState({
	// 	firstName: "string",
	// 	emailAddress: "string",
	// });

	// const [expense, setExpense] = useState({
	// 	id: new Date().getTime(),
	// 	title: "",
	// 	amount: 0,
	// 	category: "",
	// 	incurredOn: today,
	// 	notes: "",
	// 	recordedBy: "",
	// 	createdAt: today,
	// 	updatedAt: today,
	// });

	return (
		<div>
			<form className={classes.container} noValidate>
				<TextField
					// onChange={}
					id="datetime-local"
					label="Next appointment"
					type="datetime-local"
					defaultValue={today}
					className={classes.textField}
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</form>
		</div>
	);
};
