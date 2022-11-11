import React, { useState, useEffect } from 'react'
import Cookies from './Cookies'
import { db } from '../firebase-config'
import {
	collection,
	getDocs,
	addDoc,
	deleteDoc,
	doc,
	updateDoc
} from 'firebase/firestore'

const ToDo = () => {
	const [newTodo, setNewTodo] = useState('')
	const [todo, setTodo] = useState([])
	// Below const is where the collection is stored
	const todoCollectionRef = collection(db, 'thingstodo')

	// useEffect to call on the database and fill the variable needed to render the data.
	useEffect(() => {
		const getTodo = async () => {
			const data = await getDocs(todoCollectionRef)
			setTodo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
		}
		getTodo()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// Function to mark a task as done, each document (todo) contains
	// a bool wich is by default false.
	const checkTodo = async (id, done) => {
		const todoDoc = doc(db, 'thingstodo', id)
		const newFields = { done: true }
		await updateDoc(todoDoc, newFields)
		// Current solution for rendering changes, not ideal, just refreshes the page.
		window.location.reload(false)
	}

	// Function to delete a document
	const deleteTodo = async (id) => {
		const todoDoc = doc(db, 'thingstodo', id)
		await deleteDoc(todoDoc)
		window.location.reload(false)
	}

	// Function to add a new document, takes the value from the input field
	// also sets the "done"-field to false.
	const addTodo = async () => {
		await addDoc(todoCollectionRef, { todoThing: newTodo, done: false })
		window.location.reload(false)
	}

	return (
		<>
			{/* Input field to create a new todo */}
			<input
				type="text"
				placeholder="Todo"
				onChange={(event) => {
					setNewTodo(event.target.value)
				}}
			/>
			<button onClick={addTodo}>New todo</button>

			<div>
				{/* Maps out the list of todos, if "done" is false. */}
				{todo.map((todo) => {
					if (todo.done === false) {
						return (
							<ul>
								{/* Todo is the name of the array that contains
								everything from the database, so below we render
								the todoThing field.  */}
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
									Check
								</button>
							</ul>
						)
					}
					return <div></div>
				})}
			</div>
			<Cookies />
		</>
	)
}

export default ToDo
