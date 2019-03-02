const { GraphQLServer } = require('graphql-yoga')
const { hello, helloWithName } = require('./src/resolvers/Query/HelloQuery')
const { getUsers, getUser } = require('./src/resolvers/Query/UsersQuery')
// https://github.com/dskoneczny/graphql-nodeschool

const Query = {
  hello,
  helloWithName,
  getUsers,
  getUser
}

const resolvers = {
  Query
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})

server.start(() => console.log('Server is running on localhost:4000'))


