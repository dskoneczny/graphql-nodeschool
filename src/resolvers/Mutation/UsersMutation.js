const addUser = (parent, params) => {
  global.users = global.users || []

  const newUser = {
    id: global.users.length,
    firstName: params.firstName,
    lastName: params.lastName
  }
  global.users.push(newUser)

  return newUser
}

module.exports = {
  addUser
}