import { Button, Form, Modal } from "react-bootstrap"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { updateTodo, deleteTodo } from "../redux/todoSlice"

const ModalTodo = ({ data }) => {
	const [title, setTitle] = useState(data.title)
	const [description, setDescription] = useState(data.description)
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	const dispatch = useDispatch()
	const handleDeleteTodo = () => {
		dispatch(
			deleteTodo({
				id: data.id,
			})
		)
	}

	const onSubmit = (event) => {
		event.preventDefault()
		if (title !== "") {
			dispatch(
				updateTodo({
					id: data.id,
					title: title,
					description: description,
				})
			)
			setShow(false)
		}
	}
	return (
		<>
			<span
				className={
					data.status === 0
						? "text-break todo-title text-left flex-fill"
						: "text-muted text-decoration-line-through text-break todo-title text-left flex-fill"
				}
				onClick={handleShow}
			>
				{data.title}
			</span>
			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Detail Task</Modal.Title>
				</Modal.Header>

				{data.status === 0 ? (
					<>
						<Modal.Body>
							<Form onSubmit={onSubmit}>
								<Form.Group
									className="mb-3"
									controlId="exampleForm.ControlInput1"
								>
									<Form.Label>Title</Form.Label>
									<Form.Control
										type="text"
										value={title}
										onChange={(event) => setTitle(event.target.value)}
									/>
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label>Description</Form.Label>
									<Form.Control
										as="textarea"
										rows={7}
										value={description}
										onChange={(event) => setDescription(event.target.value)}
									/>
								</Form.Group>
							</Form>
							<p className="text-muted small">Created at: {data.createdAt}</p>
						</Modal.Body>
						<Modal.Footer className="d-flex justify-content-between">
							<Button
								variant="light"
								onClick={handleDeleteTodo}
								className="text-danger"
							>
								Delete this task
							</Button>
							<Button variant="primary" className="px-4" onClick={onSubmit}>
								Save
							</Button>
						</Modal.Footer>
					</>
				) : (
					<>
						<Modal.Body>
							<p>
								<strong>{data.title}</strong>
							</p>
							<p className="text-muted small">Created at: {data.createdAt}</p>
							<p>{data.description}</p>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="dark" onClick={handleClose}>
								Close
							</Button>
						</Modal.Footer>
					</>
				)}
			</Modal>
		</>
	)
}

export default ModalTodo
