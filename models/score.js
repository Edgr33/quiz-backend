const { Schema, model } = require('mongoose')

const scoreSchema = new Schema ({
  name: String,
  score: Number
})

module.exports = model('Score', scoreSchema)