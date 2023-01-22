import { useState, useEffect } from 'react'
import { NavBar } from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import { RegisterForm } from './pages/RegisterForm'
import { ListOfParticipant } from './pages/ListOfParticipant'
import participantService from './services/participants'

const App = () => {
  const [participants, setParticipants] = useState([])
  console.log('participants', participants)
  const fetchParticipants = async () => {
    try {
      const AllParticipants = await participantService.getAll()
      setParticipants(AllParticipants)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchParticipants()
  }, [])

  const addParticipants = async newParticipant => {
    try {
      const returnedParticipants = await participantService.create(
        newParticipant
      )
      setParticipants(participants.concat(returnedParticipants))
      console.log('participants', participants)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<RegisterForm addParticipants={addParticipants} />}
        />
        <Route
          path="/list"
          element={<ListOfParticipant listOfParticipants={participants} />}
        />
      </Routes>
    </div>
  )
}

export default App
