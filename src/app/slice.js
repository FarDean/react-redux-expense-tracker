import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
	name: "expenses",
	initialState: {
		expenses: [],
	},
	reducers: {
		add: (state, action) => state.expenses.push(action.payload),
		getAll: state => state.expenses,
		getOne: (state, action) => state.expenses.find(x => x.id === action.payload),
		remove: (state, action) => state.expenses.filter(x => x.id !== action.payload),
	},
});

export const { add, getAll, getOne, remove } = expenseSlice.actions;

export default expenseSlice.reducer;
