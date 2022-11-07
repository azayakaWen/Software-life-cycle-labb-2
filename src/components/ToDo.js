import React from "react"
import ToDoItems from "./ToDoItems"
import Cookies from "./Cookies"

const ToDo = ({ inputText, setInputText, onSubmit, setOnSubmit }) => {
  //Handler for input element
  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }

  //Handler for submit button
  const submitToDoHandler = (e) => {
    e.preventDefault()
    setOnSubmit([
      ...onSubmit,
      {
        text: inputText,
        complete: false,
        id: Math.random() * 1000,
      },
    ])
    setInputText("")
  }

  return (
    <>
      <form>
        <input value={inputText} onChange={inputTextHandler} type="text" />
        <button onClick={submitToDoHandler} type="submit">
          Submit
        </button>
      </form>

      <div>
        <ul>
          {onSubmit.map((value) => (
            <ToDoItems
              key={value.id}
              text={value.text}
              onSubmit={onSubmit}
              setOnSubmit={setOnSubmit}
              value={value}
            />
          ))}
        </ul>
      </div>
      <Cookies />
    </>
  )
}

export default ToDo
