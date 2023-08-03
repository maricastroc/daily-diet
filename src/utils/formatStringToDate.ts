export function formatStringToDate(date: string, time: string) {
  const dateParts = date.split('/')
  const timeParts = time.split(/:|(\s+)/)

  const day = parseInt(dateParts[0], 10)
  const month = parseInt(dateParts[1], 10) - 1
  const year = parseInt(dateParts[2], 10)

  let hour = parseInt(timeParts[0], 10)
  const minute = parseInt(timeParts[2], 10)
  const meridiem = timeParts[3]

  if (meridiem === 'pm' && hour !== 12) {
    hour += 12
  } else if (meridiem === 'am' && hour === 12) {
    hour = 0
  }

  const combinedDate = new Date(year, month, day, hour, minute)

  return combinedDate
}
