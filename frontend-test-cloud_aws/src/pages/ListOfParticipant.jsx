import { getHourOfArrival } from '../utils/getHour'

export const ListOfParticipant = ({ listOfParticipants }) => {
  const headerStyle = {
    color: '#ce0033',
    fontWeight: '700',
    padding: '10px 8px',
    width: '50%',
    outline: '3px solid #ce0033',
    outlineOffset: '2px',
    borderRadius: '5px',
    border: '3px solid #000',
    textAlign: 'center',
  }

  const containerStyle = {
    paddingTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Liste de présence</h1>
      <table className="participants-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Adresse Email</th>
            <th>Numéro de téléphone</th>
            <th>Heure d'arrivée</th>
          </tr>
        </thead>

        {listOfParticipants.map(participant => {
          return (
            <tbody key={participant.id}>
              <tr>
                <td>{participant.firstname}</td>
                <td>{participant.lastname}</td>
                <td>{participant.email}</td>
                <td>{participant.phone}</td>
                <td>{getHourOfArrival(participant.arrivedAt)}</td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  )
}
export default ListOfParticipant
