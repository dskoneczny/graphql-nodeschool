const hello = () => {
  return 'Hello world'
}

const helloWithName = (parent, params) => {
  return `Hello ${params.name}`
}

module.exports = {
  hello,
  helloWithName
}