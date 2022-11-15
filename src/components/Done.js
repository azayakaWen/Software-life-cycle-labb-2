import React, { useState, useEffect } from "react"
import { db } from "../firebase-config"
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore"
import { FaTrash } from "react-icons/fa"
import { FaCheck } from "react-icons/fa"
import "./Done.css"

// Almost identical to the "ToDo.js" except that it renders the todo if the "done" field
// is true.
const Done = () => {
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
    const newFields = { done: false }
    await updateDoc(todoDoc, newFields)
    window.location.reload(false)
  }

  const deleteTodo = async (id) => {
    const todoDoc = doc(db, "thingstodo", id)
    await deleteDoc(todoDoc)
    window.location.reload(false)
  }

  return (
    <>
      <h2>Done</h2>

      <div>
        {todo.map((todo) => {
          if (todo.done) {
            return (
              <ul className="done-container">
                <li className="done">{todo.todoThing}</li>

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
    </>
  )
}

export default Done
