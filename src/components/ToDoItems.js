import React from "react"

const ToDoitems = ({ text, onSubmit, setOnSubmit, value }) => {
  //Handler for delte button
  const deleteHandler = () => {
    setOnSubmit(onSubmit.filter((el) => el.id !== value.id))
  }

  //Handler for check button
  const completeHandler = () => {
    setOnSubmit(
      onSubmit.map((item) => {
        if (item.id === value.id) {
          return {
            ...item,
            complete: !item.complete,
          }
        }
        return item
      })
    )
  }

  return (
    <div>
      <li>{text}</li>
      <button onClick={completeHandler}>check</button>
      <button onClick={deleteHandler}>trash</button>
    </div>
  )
}

export default ToDoitems
