import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ToDo from './components/ToDo'
import Done from './components/Done'

function App() {
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
					<Route element={<ToDo />} path="/" />
					<Route element={<Done />} path="/done" />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
