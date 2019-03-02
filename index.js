const { GraphQLServer } = require('graphql-yoga')
const { hello, helloWithName } = require('./src/resolvers/Query/HelloQuery')
// https://github.com/dskoneczny/graphql-nodeschool

const Query = {
  hello,
  helloWithName
}

const resolvers = {
  Query
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})

server.start(() => console.log('Server is running on localhost:4000'))


