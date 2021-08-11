const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./database')
const connectAtlasDB = require('./atlasdb')
const app = express()

//archivos de rutas
const scoreRoutes = require('./routes/score')

app.use(bodyParser.json({
  limit: '100mb'
}))
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())


// connectDB()
connectAtlasDB()

//cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, Access-Control-Allow-Origin');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
})

//rutas
app.use('/app', scoreRoutes)

module.exports = app;