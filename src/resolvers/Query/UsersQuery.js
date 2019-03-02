const getUsers = () => {
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
  return users
}

module.exports = {
  getUsers
}