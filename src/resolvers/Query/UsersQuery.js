const getUsers = async (parent, params, context) => {
  const result = await context.db.query('SELECT * FROM "Users"')
  return result.rows
}

const getUser = async (parent, params, context) => {
  const result = await context.db.query(`SELECT * FROM "Users" WHERE id = ${params.id}`)
  return result.rows[0]
}

module.exports = {
  getUsers,
  getUser
}