require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {seed} = require('./seed.js')
const {getAllJobs} = require('./controller.js')


app.use(express.json())
app.use(cors())


app.post('/seed', seed)

app.get('/jobs', getAllJobs)









app.listen(SERVER_PORT, () => console.log(`running on ${SERVER_PORT}`))