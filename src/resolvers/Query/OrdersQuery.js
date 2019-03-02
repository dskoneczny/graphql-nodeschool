const getOrders = async (parent, params, context) => {
  const result = await context.db.query('SELECT * FROM "Orders"')

  return result.rows
}

module.exports = {
  getOrders
}