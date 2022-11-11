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
	const todoCollectionRef = collection(db, 'thingstodo')

	useEffect(() => {
		const getTodo = async () => {
			const data = await getDocs(todoCollectionRef)
			setTodo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
			console.log(data)
		}
		getTodo()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const checkTodo = async (id, done) => {
		const todoDoc = doc(db, 'thingstodo', id)
		const newFields = { done: true }
		await updateDoc(todoDoc, newFields)
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
				{todo.map((todo) => {
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
				})}
			</div>
			<Cookies />
		</>
	)
}

export default ToDo
