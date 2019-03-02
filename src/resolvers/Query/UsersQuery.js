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