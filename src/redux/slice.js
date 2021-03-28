import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// THUNKS
const fetchAll = createAsyncThunk("GetAll", async (storageName, thunkAPI) => {
	return await JSON.parse(localStorage.getItem(storageName));
});

export const expenseSlice = createSlice({
	name: "expenses",
	initialState: {
		expenses: [],
		loading: "idle",
	},
	reducers: {
		add: (state, action) => state.expenses.push(action.payload),
		getAll: (state, action) => (state.expenses = action.payload),
		getOne: (state, action) => state.expenses.find(x => x.id === action.payload),
		remove: (state, action) => state.expenses.filter(x => x.id !== action.payload),
	},
	extraReducers: {
		[fetchAll.fulfilled]: (state, action) => {
			state.expenses = action.payload;
		},
	},
});

export const { add, getAll, getOne, remove } = expenseSlice.actions;

export default expenseSlice.reducer;
