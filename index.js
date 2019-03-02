const { GraphQLServer } = require('graphql-yoga')

// QUERIES
const { hello, helloWithName } = require('./src/resolvers/Query/HelloQuery')
const { getUsers, getUser } = require('./src/resolvers/Query/UsersQuery')

// MUTATIONS
const { addUser } = require('./src/resolvers/Mutation/UsersMutation')

// GITHUB URL:
// https://github.com/dskoneczny/graphql-nodeschool

const Query = {
  hello,
  helloWithName,
  getUsers,
  getUser
}

const Mutation = {
  addUser
}

const resolvers = {
  Query,
  Mutation
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})

server.start(() => console.log('Server is running on localhost:4000'))


