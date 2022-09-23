const express = require('express')
const cors = require('cors');
const app = express()
const { validations } = require('./middleware/validations/validations')
const { loginRoute } = require('./routes/loginRoutes/loginRoute')
const { registerRoute } = require('./routes/registerRoute/registerRoute')
require('dotenv').config()

app.use(cors())
let port = process.env.PORT || 9000
app.use(express.json())
app.use('/api',validations,registerRoute)
app.use('/api',loginRoute)

app.listen(port,()=>{
    console.log('The server running on this port ',port)
})