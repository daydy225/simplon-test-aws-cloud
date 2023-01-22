import { useState, useEffect } from 'react'
import { NavBar } from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import { RegisterForm } from './pages/RegisterForm'
import { ListOfParticipant } from './pages/ListOfParticipant'
import participantService from './services/participants'

const App = () => {
  const [participants, setParticipants] = useState([])
  const [notificationMsg, setNotificationMsg] = useState({
    message: null,
    type: 'error',
  })

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
      setNotificationMsg({
        message: `Mr/Mme ${newParticipant.firstname} ${newParticipant.lastname} a été enregistré avec succès!`,
        type: 'success',
      })
      setTimeout(() => {
        setNotificationMsg({
          message: null,
        })
      }, 5000)
    } catch (exeption) {
      setNotificationMsg({
        message: "Une erreur s'est produite lors de l'enregistrement",
        type: 'error',
      })
      setTimeout(() => {
        setNotificationMsg({
          message: null,
        })
      }, 5000)
    }
  }

  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <RegisterForm
              addParticipants={addParticipants}
              message={notificationMsg.message}
              type={notificationMsg.type}
            />
          }
        />
        <Route
          path="/lists"
          element={<ListOfParticipant listOfParticipants={participants} />}
        />
      </Routes>
    </div>
  )
}

export default App
