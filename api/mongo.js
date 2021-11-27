const mongoose = require('mongoose')

const { MONGO_DB_URI, MONGO_DB_URI_TEST, NODE_ENV } = process.env

const connectionString = NODE_ENV === 'test' ? MONGO_DB_URI_TEST : MONGO_DB_URI

// connect to Atlas
mongoose
  .connect(connectionString)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.log('error in connect', { err })
  })

process.on('uncaughtException', () => {
  mongoose.connection.close()
})
