import { NavBar } from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import { RegisterForm } from './pages/RegisterForm'
import { ListOfParticipant } from './pages/ListOfParticipant'

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<RegisterForm />}
        />
        <Route
          path="/list"
          element={<ListOfParticipant />}
        />
      </Routes>
    </div>
  )
}

export default App
