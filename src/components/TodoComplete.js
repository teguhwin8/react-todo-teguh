import React from "react"
import { useDispatch } from "react-redux"
import { toggleComplete } from "../redux/todoSlice"

const TodoComplete = ({ id, title, status }) => {
	const dispatch = useDispatch()
	const handleCompleteClick = () => {
		dispatch(
			toggleComplete({
				id: id,
				status: 0,
			})
		)
	}
	return (
		<li className="list-group-item list-group-item-success">
			<div className="d-flex justify-content-between">
				<span className="d-flex align-items-center">
					<input type="checkbox" className="mr-3" checked onChange={handleCompleteClick}></input>
					{title}
				</span>
			</div>
		</li>
	)
}

export default TodoComplete
