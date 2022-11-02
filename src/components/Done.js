import React from "react"
import DoneItems from "./DoneItems"

const Done = ({ onSubmit, setOnSubmit }) => {
  return (
    <>
      <div>
        <ul>
          {onSubmit.map((value) => (
            <DoneItems
              key={value.id}
              text={value.text}
              onSubmit={onSubmit}
              setOnSubmit={setOnSubmit}
              value={value}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

export default Done
