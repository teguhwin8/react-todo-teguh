import React from "react"
import { useDispatch } from "react-redux"
import { toggleComplete } from "../redux/todoSlice"
import ModalTodo from "../components/ModalTodo"

const TodoItem = ({ data }) => {
	const dispatch = useDispatch()
	const handleCompleteClick = () => {
		dispatch(
			toggleComplete({
				id: data.id,
				status: 1,
			})
		)
	}
	return (
		<li className="list-group-item">
			<div className="d-flex justify-content-between align-items-center">
				<input
					type="checkbox"
					className="me-3"
					onChange={handleCompleteClick}
				></input>
				<ModalTodo data={data} />
			</div>
		</li>
	)
}

export default TodoItem
