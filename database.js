const mongoose = require('mongoose')
const atlasDB = require('./atlasdb')

const connectDB = () => {
  mongoose.connect('mongodb://localhost/quizDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
    .then(db => console.log('database is connected'))
    .catch(err => {
      console.log('Database connection failed. Trying AtlasDB connection')
      // mongoose.disconnect()
      atlasDB()
    })
}

module.exports = connectDB