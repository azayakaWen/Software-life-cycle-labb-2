import React, { Component } from "react"
import { HashRouter, Routes, Route, Link } from "react-router-dom"
import LogRocket from "logrocket"
import CookieConsent from "react-cookie-consent"
import ToDo from "./components/ToDo"
import Done from "./components/Done"
import "./index.css"

class App extends Component {
  render() {
    return (
      <>
        <h1>JUST DO IT!!</h1>

        <HashRouter>
          <nav>
            <ul className="link-container">
              <li className="link">
                <Link to="/">To do list</Link>
              </li>
              <li className="link">
                <Link to="/done">Done!</Link>
              </li>
            </ul>
          </nav>

          <CookieConsent
            onAccept={() => {
              LogRocket.init("kawuvz/software-life-cycle-labb-2")
            }}
            location="bottom"
            buttonText="Accept"
            cookieName="TodoCookie"
            buttonStyle={{
              background: "grey",
              color: "white",
              borderRadius: "5px",
              fontSize: "16px",
            }}
            expires={1}
          >
            This side uses cookies. Accept or else!
          </CookieConsent>

          <Routes>
            <Route element={<ToDo />} path="/" />
            <Route element={<Done />} path="/done" />
          </Routes>
        </HashRouter>
      </>
    )
  }
}

export default App
