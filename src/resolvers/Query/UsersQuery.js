const getUsers = () => {
  global.users = global.users || []

  return global.users
}

const getUser = (parent, params) => {
  const result =  users.find(item => item.id == params.id)
  if (!result) {
    throw new Error("Uzytkownik o danym id nie został znaleziony")
  }

  return result
}

module.exports = {
  getUsers,
  getUser
}