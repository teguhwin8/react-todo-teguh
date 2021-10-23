import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import moment from "moment"

export const getTodosAsync = createAsyncThunk(
	"todos/getTodosAsync",
	async () => {
		const resp = await fetch(
			"https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list"
		)
		if (resp.ok) {
			const todos = await resp.json()
			return { todos }
		}
	}
)

const todoSlice = createSlice({
	name: "todos",
	initialState: [],
	reducers: {
		addTodo: (state, action) => {
			const newTodo = {
				id: Date.now(),
				title: action.payload.title,
				description: "",
				status: 0,
				createdAt: moment(Date.now()).format("Y-MM-DD hh:mm:ss"),
			}
			state.push(newTodo)
		},
		toggleComplete: (state, action) => {
			const index = state.findIndex((todo) => todo.id === action.payload.id)
			state[index].status = action.payload.status
		},
		deleteTodo: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id)
		},
	},
	extraReducers: {
		[getTodosAsync.fulfilled]: (state, action) => {
			return action.payload.todos
		},
	},
})

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
