const addUser = (parent, params) => {

  const newUser = {
    id: 1,
    firstName: params.firstName,
    lastName: params.lastName
  }

  return newUser
}

module.exports = {
  addUser
}