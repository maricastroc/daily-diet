export const formatDate = (dateStr: string): number => {
  const dateObj = new Date(dateStr)
  return dateObj.getTime()
}
