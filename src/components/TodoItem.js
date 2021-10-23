import React from "react"
import { useDispatch } from "react-redux"
import { toggleComplete, deleteTodo } from "../redux/todoSlice"

const TodoItem = ({ id, title, status }) => {
	const dispatch = useDispatch()
	const handleCompleteClick = () => {
		dispatch(
			toggleComplete({
				id: id,
				status: 1,
			})
		)
	}
	const handleDeleteTodo = () => {
		dispatch(
			deleteTodo({
				id: id,
			})
		)
	}
	return (
		<li className="list-group-item">
			<div className="d-flex justify-content-between">
				<span className="d-flex align-items-center">
					<input
						type="checkbox"
						className="mr-3"
						onChange={handleCompleteClick}
					></input>
					{title}
				</span>
				<button className="btn btn-danger" onClick={handleDeleteTodo}>
					Delete
				</button>
			</div>
		</li>
	)
}

export default TodoItem
