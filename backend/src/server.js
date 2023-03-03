const express = require('express')
const cors = require('cors');
const app = express()
const { validations } = require('./middleware/validations/validations')
const { loginRoute } = require('./routes/loginRoutes/loginRoute')
const { registerRoute } = require('./routes/registerRoute/registerRoute');
const { createBillRoute } = require('./routes/createBillRoute/createBillRoute');
const { billItemRoute } = require('./routes/billItemRoute/billItemRoute');
const { customerBillInfoRoute } = require('./routes/customerBillInfoRoute/customerBillInfoRoute');
require('dotenv').config()

app.use(cors())
let port = process.env.PORT || 8000
app.use(express.json())
app.use('/api',validations,registerRoute)
app.use('/api',loginRoute)
app.use('/api',createBillRoute)
app.use('/api',billItemRoute)
app.use('/api',customerBillInfoRoute)

app.listen(port,()=>{
    console.log('The server running on this port ',port)
    app.get("/",(req,res)=>{
        res.send("<h1>Server is Running on Port 8000</h1>")
    })
})