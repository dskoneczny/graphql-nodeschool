const { GraphQLServer } = require('graphql-yoga')
const { Client } = require('pg')

// DATABASE CONNECTION
// https://bit.ly/2SCIst1
const DATABASE_URL = "postgres://ptzlbdyjlabixo:04a27a0b7e06081a397d2d49776427af9804b66a1870ffbf19d13668736a5b80@ec2-46-137-121-216.eu-west-1.compute.amazonaws.com:5432/d2rd2bavu9mj8a?ssl=true"
const client = new Client({ connectionString: DATABASE_URL})

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


