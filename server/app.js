const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const cors = require('cors')

require('./startup/database')()

const app = express()


app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))



const port = process.env.PORT || 3030
app.listen(port, () => console.log(`Sever is listening on port ${port}`))