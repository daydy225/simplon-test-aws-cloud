import { useState } from 'react'

export const RegisterForm = () => {
  const [particitants, setParticipants] = useState({
    lastname: '',
    firstname: '',
    phone: '',
    email: '',
    arrivedAt: new Date(),
  })

  const registerStyle = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#000',
    paddingTop: ' 20px',
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

  const handleSubmit = event => {
    event.preventDefault()
    console.log(particitants)
  }

  return (
    <div style={registerStyle}>
      <h1 style={headerStyle}>S'enregister sur la liste présence</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="lastname">Nom</label>
          <input
            type="text"
            value={particitants.lastname}
            placeholder="Entrez votre nom"
            maxLength={15}
            onChange={({ target }) => {
              setParticipants({ ...particitants, lastname: target.value })
            }}
          />
        </div>
        <div className="form-input">
          <label htmlFor="firstname">Prénom</label>
          <input
            type="text"
            placeholder="Entrez votre prénom"
            value={particitants.firstname}
            maxLength={15}
            onChange={({ target }) => {
              setParticipants({ ...particitants, firstname: target.value })
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
            value={particitants.phone}
            onChange={({ target }) => {
              setParticipants({ ...particitants, phone: target.value })
            }}
          />
        </div>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={particitants.email}
            placeholder="Entrez votre addresse email"
            onChange={({ target }) => {
              setParticipants({ ...particitants, email: target.value })
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
