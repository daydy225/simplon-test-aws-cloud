import { getHourOfArrival } from '../utils/getHour'
import { IoDocumentText } from 'react-icons/io5'
import * as XLSX from 'xlsx'

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
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  const downloadExcel = data => {
    const worksheet = XLSX.utils.json_to_sheet(data)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
    //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workbook, 'DataSheet.xlsx')
  }

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Liste de présence</h1>
      <button className="excel-btn">
        <IoDocumentText
          size={30}
          style={{ paddingRight: '0.4rem' }}
          onClick={() => downloadExcel(listOfParticipants)}
        />
        Exporter le fichier Excel
      </button>
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
