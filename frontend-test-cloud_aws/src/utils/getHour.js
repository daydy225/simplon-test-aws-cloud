export const getHourOfArrival = date => {
  const time = new Date(date)
  const hour = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  return `${hour} h ${minutes} min ${seconds} secs`
}
