import React, { useState, useEffect } from "react"
import Cookies from "./cookies/Cookies"
import { db } from "../firebase-config"
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore"
import { FaTrash } from "react-icons/fa"
import { FaCheck } from "react-icons/fa"
import "./ToDo.css"

const ToDo = () => {
  const [newTodo, setNewTodo] = useState("")
  const [todo, setTodo] = useState([])
  const todoCollectionRef = collection(db, "thingstodo")

  useEffect(() => {
    const getTodo = async () => {
      const data = await getDocs(todoCollectionRef)
      setTodo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getTodo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const checkTodo = async (id, done) => {
    const todoDoc = doc(db, "thingstodo", id)
    const newFields = { done: true }
    await updateDoc(todoDoc, newFields)
    window.location.reload(false)
  }

  const deleteTodo = async (id) => {
    const todoDoc = doc(db, "thingstodo", id)
    await deleteDoc(todoDoc)
    window.location.reload(false)
  }

  const addTodo = async () => {
    await addDoc(todoCollectionRef, { todoThing: newTodo, done: false })
    window.location.reload(false)
  }

  return (
    <>
      <div className="input-container">
        {/* Input field to create a new todo */}
        <input
          type="text"
          placeholder="Todo"
          onChange={(event) => {
            setNewTodo(event.target.value)
          }}
        />
        <button className="submit-button" onClick={addTodo}>
          New todo
        </button>
      </div>

      <div>
        {todo.map((todo) => {
          if (!todo.done) {
            return (
              <ul className="todo-container">
                <li className="todo">{todo.todoThing}</li>

                <button
                  className="action-button"
                  onClick={() => {
                    deleteTodo(todo.id)
                  }}
                >
                  <FaTrash />
                </button>
                <button
                  className="action-button"
                  onClick={() => {
                    checkTodo(todo.id, todo.done)
                  }}
                >
                  {" "}
                  <FaCheck />
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
