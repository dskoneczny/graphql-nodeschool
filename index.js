const { GraphQLServer } = require('graphql-yoga')
// https://github.com/dskoneczny/graphql-nodeschool
const typeDefs = `
  type Query {
    hello: String!
    helloWithName(name: String!): String!
  }
`
const resolvers = {
  Query: {
    hello: () => 'Hello World!',
    helloWithName: (parent, params) => `Hello ${params.name}`
  }
}
const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => console.log('Server is running on localhost:4000'))


