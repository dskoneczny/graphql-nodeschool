const { GraphQLServer } = require('graphql-yoga')
const { Client } = require('pg')

// DATABASE CONNECTION
// https://bit.ly/2SCIst1
// https://pastebin.com/CwCvmgk1
// const DATABASE_URL = "postgres://ptzlbdyjlabixo:04a27a0b7e06081a397d2d49776427af9804b66a1870ffbf19d13668736a5b80@ec2-46-137-121-216.eu-west-1.compute.amazonaws.com:5432/d2rd2bavu9mj8a?ssl=true"
const DATABASE_URL = "postgres://ckwpgabmxyxkit:99dc71fc5776ce4577b39eeac34c1b1d9966766db90dd22dc6b907371db437ee@ec2-46-137-170-51.eu-west-1.compute.amazonaws.com:5432/df5rbug20emf0f?ssl=true"
const client = new Client({ connectionString: DATABASE_URL })
client.connect()

// QUERIES
const { hello, helloWithName } = require('./src/resolvers/Query/HelloQuery')
const { getUsers, getUser } = require('./src/resolvers/Query/UsersQuery')
const { getOrders, getOrder, getUserOrders } = require('./src/resolvers/Query/OrdersQuery')
// MUTATIONS
const { addUser } = require('./src/resolvers/Mutation/UsersMutation')

// GITHUB URL:
// https://github.com/dskoneczny/graphql-nodeschool

const Query = {
  hello,
  helloWithName,
  getUsers,
  getUser,
  getOrders,
  getOrder
}

const Mutation = {
  addUser
}

const context = {
  db: client
}

// RESOLVE MAP PROPERTY
const resolvers = {
  Query,
  Mutation,
  Order: {
    user: (order) => {
      return getUser(order, { id: order.UserId}, context)
    }
  },
  User: {
    orders: (user, params) => {
      return getUserOrders(user, params, context)
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context
})

server.start(() => console.log('Server is running on localhost:4000'))


