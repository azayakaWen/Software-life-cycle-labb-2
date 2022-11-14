import React, { useState } from "react"
import { useCookies } from "react-cookie"
import "./Cookies.css"

const Cookies = () => {
  //Cookies
  const [cookies, setCookies] = useCookies(["user"])
  console.log(cookies)

  const [cookieButton, setCookieButton] = useState(true)

  //Handler for cookies
  const cookieHandler = () => {
    const now = new Date()
    now.setTime(now.getTime() + 10000)

    setCookies("user", "Det funkar!", { path: "/", expires: now })
    setCookieButton(false)
  }

  return (
    <>
      {cookieButton ? (
        <div className="container">
          <div className="cookie-container">
            <p>This side uses cookies. Accept or els!</p>
            <button className="button" onClick={cookieHandler}>
              Accept
            </button>
            <button className="button" onClick={() => setCookieButton(false)}>
              Decline
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Cookies
