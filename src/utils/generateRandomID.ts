export function generateRandomId() {
  const randomString = Math.random().toString(36).substring(2, 10)
  const timestamp = Date.now().toString(36)
  return randomString + timestamp
}
