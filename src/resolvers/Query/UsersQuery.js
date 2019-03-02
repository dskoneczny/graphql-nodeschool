const getUsers = () => {
  global.users = global.users || []

  return global.users
}

const getUser = (parent, params) => {
  global.users = global.users || []
  const result =  global.users.find(item => item.id == params.id)
  if (!result) {
    throw new Error("Uzytkownik o danym id nie został znaleziony")
  }

  return result
}

module.exports = {
  getUsers,
  getUser
}