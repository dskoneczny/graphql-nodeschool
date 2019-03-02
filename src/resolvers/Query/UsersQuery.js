const getUsers = async (parent, params, context) => {
  const result = await context.db.query('SELECT * FROM "Users"')
  return result.rows
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