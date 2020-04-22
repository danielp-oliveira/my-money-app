require("dotenv").config()
const mongoose = require("mongoose")

mongoose.Promise = global.Promise
module.exports = mongoose.connect(`${process.env.DATABASE_CONNECTION_STRING}`, {
  useNewUrlParser: true,
})
