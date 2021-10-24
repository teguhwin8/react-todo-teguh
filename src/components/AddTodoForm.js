import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/todoSlice"

const AddTodoForm = () => {
	const [value, setValue] = useState("")

	const dispatch = useDispatch()

	const onSubmit = (event) => {
		event.preventDefault()
		if (value !== "") {
			dispatch(
				addTodo({
					title: value,
				})
			)
			setValue("")
		}
	}

	return (
		<form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
			<div className="input-group mb-3">
				{/* <span className="input-group-text" id="add-task">
					+
				</span> */}
				<input
					type="text"
					className="form-control p-2 px-4 rounded-pill"
					placeholder="Add task"
					aria-label="Add task"
					aria-describedby="add-task"
					value={value}
					onChange={(event) => setValue(event.target.value)}
				/>
			</div>
		</form>
	)
}

export default AddTodoForm
