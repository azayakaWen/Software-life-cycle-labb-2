import React, { useState, useEffect } from 'react'
import { db } from '../firebase-config'
import {
	collection,
	getDocs,
	addDoc,
	deleteDoc,
	doc,
	updateDoc
} from 'firebase/firestore'
// Almost identical to the "ToDo.js" except that it renders the todo if the "done" field
// is true.
const Done = () => {
	const [newTodo, setNewTodo] = useState('')
	const [todo, setTodo] = useState([])
	const todoCollectionRef = collection(db, 'thingstodo')

	useEffect(() => {
		const getTodo = async () => {
			const data = await getDocs(todoCollectionRef)
			setTodo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
		}
		getTodo()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const checkTodo = async (id, done) => {
		const todoDoc = doc(db, 'thingstodo', id)
		const newFields = { done: false }
		await updateDoc(todoDoc, newFields)
		window.location.reload(false)
	}

	const deleteTodo = async (id) => {
		const todoDoc = doc(db, 'thingstodo', id)
		await deleteDoc(todoDoc)
		window.location.reload(false)
	}

	const addTodo = async () => {
		await addDoc(todoCollectionRef, { todoThing: newTodo, done: false })
		window.location.reload(false)
	}

	return (
		<>
			<h1>Done</h1>

			<input
				type="text"
				placeholder="Todo"
				onChange={(event) => {
					setNewTodo(event.target.value)
				}}
			/>
			<button onClick={addTodo}>New todo</button>

			<div>
				{todo.map((todo) => {
					if (todo.done) {
						return (
							<ul>
								<li>{todo.todoThing}</li>

								<button
									onClick={() => {
										deleteTodo(todo.id)
									}}
								>
									Delete
								</button>

								<button
									onClick={() => {
										checkTodo(todo.id, todo.done)
									}}
								>
									{' '}
									Check
								</button>
							</ul>
						)
					}
					return <div></div>
				})}
			</div>
		</>
	)
}

export default Done
