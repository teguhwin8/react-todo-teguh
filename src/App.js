import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import AddTodoForm from "./components/AddTodoForm"
import TodoList from "./components/TodoList"

const App = () => {
	return (
		<div className="container bg-white p-4 mt-5 shadow-lg rounded">
			{/* Heading */}
			<h2 className="text-center">TODO LIST APP</h2>

			<AddTodoForm />

			<TodoList />

			{/* Footer */}
			<div className="text-center mt-5 small text-muted footer">
				Made with ❤️ by
				<a
					href="https://github.com/teguhwin8/react-todo-teguh"
					target="_blank"
					rel="noreferrer"
					className="ms-1"
				>
					Mr. T
				</a>
			</div>
		</div>
	)
}

export default App
