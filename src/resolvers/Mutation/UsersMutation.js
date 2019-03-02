const addUser = async (parent, params, context) => {
  const query = 'INSERT INTO "Users"("firstName", "lastName") VALUES($1, $2) RETURNING *'
  const values = [params.firstName, params.lastName]

  const result = await context.db.query(query, values)
  return result.rows[0]
}

module.exports = {
  addUser
}