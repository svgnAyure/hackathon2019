const get = () => {
  return JSON.parse(sessionStorage.getItem('cart')) || []
}

const set = data => {
  sessionStorage.setItem('cart', JSON.stringify(data))
}

const add = item => {
  const newData = [...get(), item]
  set(newData)
  return newData
}

const remove = idx => {
  const newData = get().filter((_, i) => i !== idx)
  set(newData)
  return newData
}

const clear = () => {
  sessionStorage.clear()
  return []
}

export default {
  get,
  add,
  remove,
  clear
}
