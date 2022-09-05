const express = require('express')
const cors = require('cors')


const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

const router = require('./routes/songRouter.js')
app.use('/api/songs', router)

app.use('/Images', express.static('./Images'))

const PORT = 8080

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})