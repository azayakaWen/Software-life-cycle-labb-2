import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ToDo from './components/ToDo'
import Done from './components/Done'
import { db } from './firebase-config'
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'

function App() {
	const [newTodo, setNewTodo] = useState('')
	const [inputText, setInputText] = useState('')
	const [onSubmit, setOnSubmit] = useState([])
	const [todo, setTodo] = useState([])
	const todoCollectionRef = collection(db, 'todo')

	const addTodo = async () => {
		await addDoc(todoCollectionRef, { todo: newTodo })
	}

	const deleteTodo = async (id) => {
		const todoDoc = doc(db, 'todo', id)
		await deleteDoc(todoDoc)
	}

	useEffect(() => {
		const getTodo = async () => {
			const data = await getDocs(todoCollectionRef)
			setTodo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
			console.log(data)
		}

		getTodo()
	}, [])
	return (
		<>
			<h1>JUST DO IT!</h1>
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
						<div>
							<h1>{todo.todo}</h1>
							<button
								onClick={() => {
									deleteTodo(todo.id)
								}}
							>
								Delete
							</button>
						</div>
					)
				})}
			</div>

			<BrowserRouter>
				<nav>
					<ul>
						<li>
							<Link to="/">To do list</Link>
						</li>
						<li>
							<Link to="/done">Done!</Link>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route
						element={
							<ToDo
								inputText={inputText}
								setInputText={setInputText}
								onSubmit={onSubmit}
								setOnSubmit={setOnSubmit}
							/>
						}
						path="/"
					/>
					<Route
						element={<Done onSubmit={onSubmit} setOnSubmit={setOnSubmit} />}
						path="/done"
					/>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
