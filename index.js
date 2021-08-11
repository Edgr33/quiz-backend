const app = require('./app')
let port = process.env.PORT;
if (port == null || port == "") {
  port = 88;
}


app.listen(port, () => {
  console.log('server ok')
})