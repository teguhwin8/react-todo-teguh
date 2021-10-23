import React, { useEffect } from 'react';
import TodoItem from "./TodoItem"
import TodoComplete from "./TodoComplete"
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../redux/todoSlice';

const TodoList = () => {
	const dispatch = useDispatch();

	const todos = useSelector((state) => state.todos)
	const notComplete = todos.filter((todo) => todo.status === 0)
	const complete = todos.filter((todo) => todo.status === 1)

	let notCompleteSorted = notComplete.sort((b, a) => a.createdAt.split('/').reverse().join().localeCompare(b.createdAt.split('/').reverse().join()));
	let completeSorted = complete.sort((a, b) => a.createdAt.split('/').reverse().join().localeCompare(b.createdAt.split('/').reverse().join()));

	useEffect(() => {
		dispatch(getTodosAsync());
	}, [dispatch]);

	return (
		<div>
			<ul className="list-group">
				{notCompleteSorted.map((todo) => (
					<TodoItem id={todo.id} title={todo.title} key={todo.id} />
				))}
			</ul>
			<h5 className="mt-5">Complete Task</h5>
			<ul className="list-group">
				{completeSorted.map((todo) => (
					<TodoComplete id={todo.id} title={todo.title} key={todo.id} />
				))}
			</ul>
		</div>
	)
}

export default TodoList
