require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {seed} = require('./seed.js')
const {getAllJobs, postNewJob, deleteJob, getJob, searchJobs} = require('./controller.js')


app.use(express.json())
app.use(cors())


app.post('/seed', seed)

app.get('/jobs', getAllJobs)

app.get('/jobs/:id', getJob)

app.post('/jobs', postNewJob)

app.delete('/jobs/:id', deleteJob)

app.get('/job/:title',searchJobs)












app.listen(SERVER_PORT, () => console.log(`running on ${SERVER_PORT}`))