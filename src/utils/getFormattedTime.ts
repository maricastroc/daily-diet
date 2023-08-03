export function getFormattedTime(date: Date): string {
  const hours = date.getHours()

  const minutes = String(date.getMinutes()).padStart(2, '0')

  const ampm = hours >= 12 ? 'pm' : 'am'

  const formattedHours = (hours % 12 || 12).toString().padStart(2, '0')

  return `${formattedHours}:${minutes}${ampm}`
}
