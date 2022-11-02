import React, { useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import ToDo from "./components/ToDo"
import Done from "./components/Done"

function App() {
  const [inputText, setInputText] = useState("")
  const [onSubmit, setOnSubmit] = useState([])
  return (
    <>
      <h1>JUST DO IT!</h1>

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
