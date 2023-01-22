import { useState } from 'react'
import { Notification } from '../components/Notification'
export const RegisterForm = ({ addParticipants, message, type }) => {
  const [newParticipants, setNewParticipants] = useState({
    lastname: '',
    firstname: '',
    phone: '',
    email: '',
  })

  const registerStyle = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#000',
    paddingTop: ' 1rem',
  }

  const headerStyle = {
    color: '#ce0033',
    fontWeight: '700',
    padding: '10px 8px',
    outline: '3px solid #ce0033',
    outlineOffset: '2px',
    borderRadius: '5px',
    border: '3px solid #000',
  }

  const registerParticipant = event => {
    event.preventDefault()
    addParticipants({
      ...newParticipants,
    })
    setNewParticipants({
      lastname: '',
      firstname: '',
      phone: '',
      email: '',
    })
    // window.location.href = '/list'
  }

  return (
    <div style={registerStyle}>
      <h1 style={headerStyle}>S'enregister sur la liste de présence</h1>
      <Notification
        message={message}
        type={type}
      />
      <form onSubmit={registerParticipant}>
        <div className="form-input">
          <label htmlFor="lastname">Nom</label>
          <input
            type="text"
            value={newParticipants.lastname}
            placeholder="Entrez votre nom"
            maxLength={15}
            onChange={({ target }) => {
              setNewParticipants({ ...newParticipants, lastname: target.value })
            }}
          />
        </div>
        <div className="form-input">
          <label htmlFor="firstname">Prénom</label>
          <input
            type="text"
            placeholder="Entrez votre prénom"
            value={newParticipants.firstname}
            maxLength={15}
            onChange={({ target }) => {
              setNewParticipants({
                ...newParticipants,
                firstname: target.value,
              })
            }}
          />
        </div>
        <div className="form-input">
          <label htmlFor="phone">Numéro de téléphone</label>
          <input
            type="text"
            placeholder="Entrez votre numéro de téléphone"
            maxLength={10}
            pattern="[0-9]{10}"
            value={newParticipants.phone}
            onChange={({ target }) => {
              setNewParticipants({ ...newParticipants, phone: target.value })
            }}
          />
        </div>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={newParticipants.email}
            placeholder="Entrez votre addresse email"
            onChange={({ target }) => {
              setNewParticipants({ ...newParticipants, email: target.value })
            }}
          />
        </div>
        <button
          type="submit"
          className="form-btn"
        >
          confirmer
        </button>
      </form>
    </div>
  )
}
