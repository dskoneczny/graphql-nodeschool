const getOrders = async (parent, params, context) => {
  const result = await context.db.query('SELECT * FROM "Orders"')

  return result.rows
}

const getOrder = async (parent, params, context) => {
  const result = await context.db.query(`SELECT * FROM "Orders" WHERE id = ${params.id}`)

  return result.rows[0]
}

module.exports = {
  getOrders,
  getOrder
}