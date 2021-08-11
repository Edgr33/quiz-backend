const mongoose = require('mongoose')

const URI = 'mongodb+srv://dbUser:dbUser@cluster0.rvc0x.mongodb.net/QuizDB?retryWrites=true&w=majority'

const connectDB = async() => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
    .then(db => console.log('Atlas DB connected'))
    .catch(err => console.log(err))
}

module.exports = connectDB