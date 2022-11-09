import { useCookies } from "react-cookie"

const Cookies = () => {
  //Cookies
  const [cookies, setCookies] = useCookies(["user"])
  console.log(cookies)

  //Handler for cookies
  const cookieHandler = () => {
    const now = new Date()
    now.setTime(now.getTime() + 10000)

    setCookies("user", "Det funkar!", { path: "/", expires: now })
  }

  return (
    <div>
      <p>Denna sidan använder cookies. Godkänn detta annars!</p>
      <button onClick={cookieHandler}>Godkänn</button>
    </div>
  )
}

export default Cookies
