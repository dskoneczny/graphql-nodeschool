const users = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe'
  },
  {
    id: 2,
    firstName: 'Mark',
    lastName: 'Price'
  },
]

const getUsers = () => {
  return users
}

const getUser = (parent, params) => {
  return users.find(item => item.id == params.id)
}

module.exports = {
  getUsers,
  getUser
}