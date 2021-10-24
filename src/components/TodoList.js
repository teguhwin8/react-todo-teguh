import React, { useEffect } from "react"
import TodoItem from "./TodoItem"
import TodoComplete from "./TodoComplete"
import { useSelector, useDispatch } from "react-redux"
import { getTodosAsync } from "../redux/todoSlice"

const TodoList = () => {
	const dispatch = useDispatch()

	const todos = useSelector((state) => state.todos)
	const notComplete = todos.filter((todo) => todo.status === 0)
	const complete = todos.filter((todo) => todo.status === 1)

	const notCompleteSorted = notComplete.sort((b, a) =>
		a.createdAt
			.split("/")
			.reverse()
			.join()
			.localeCompare(b.createdAt.split("/").reverse().join())
	)
	const completeSorted = complete.sort((a, b) =>
		a.createdAt
			.split("/")
			.reverse()
			.join()
			.localeCompare(b.createdAt.split("/").reverse().join())
	)

	useEffect(() => {
		dispatch(getTodosAsync())
	}, [dispatch])

	return (
		<div>
			{notCompleteSorted.length > 0 ? (
				<div className="mb-5">
					<div className="d-flex align-items-center mt-5 mb-3">
						<h5 className="m-0 p-0">Task list</h5>
						<span className="badge bg-dark rounded-pill ms-2">
							{notCompleteSorted.length}
						</span>
					</div>

					<ul className="list-group">
						{notCompleteSorted.map((todo) => (
							<TodoItem data={todo} key={todo.id} />
						))}
					</ul>
				</div>
			) : (
				<div className="text-center text-muted">
					There are no unfinished tasks for now. Please make a task first.
				</div>
			)}

			{completeSorted.length > 0 ? (
				<div className="mb-5">
					<div className="d-flex align-items-center mb-3">
						<h5 className="m-0 p-0">Task completed</h5>
						<span className="badge bg-dark rounded-pill ms-2">
							{completeSorted.length}
						</span>
					</div>
					<ul className="list-group">
						{completeSorted.map((todo) => (
							<TodoComplete data={todo} key={todo.id} />
						))}
					</ul>
				</div>
			) : (
				""
			)}
		</div>
	)
}

export default TodoList
