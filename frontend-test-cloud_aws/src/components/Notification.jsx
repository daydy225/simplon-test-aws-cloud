import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from 'react-icons/io5'

export const Notification = ({ message, type }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={type === 'error' ? 'error' : 'success'}>
      {type === 'error' ? (
        <IoCloseCircleOutline
          size={35}
          style={{ paddingRight: '0.6rem' }}
        />
      ) : (
        <IoCheckmarkCircleOutline
          size={35}
          style={{ paddingRight: '0.6rem' }}
        />
      )}

      {message}
    </div>
  )
}

export default Notification
