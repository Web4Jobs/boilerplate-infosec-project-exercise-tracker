const express = require('express')
const app = express()
const cors = require('cors')
var { registerTestRoutes } = require('w4j-test-utils');
require('dotenv').config()

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

/*
Your code Goes Here
*/



























registerTestRoutes(app);
// Listen on port set in environment variable or default to 3000
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
