const { GraphQLServer } = require('graphql-yoga')
// https://github.com/dskoneczny/graphql-nodeschool

const resolvers = {
  Query: {
    hello: () => 'Hello World!',
    helloWithName: (parent, params) => `Hello ${params.name}`
  }
}
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})

server.start(() => console.log('Server is running on localhost:4000'))


