require('dotenv').config()

const express = require('express')
const cors = require('cors')
const router = require('./routes/router')

require('./DB/connection')

const styleServer = express()

styleServer.use(cors())
styleServer.use(express.json())
styleServer.use(router)
// bServer.use('/uploads',express.static('./Uploads'))

const PORT = 3000 || process.env.PORT

styleServer.listen(PORT,() => {
    console.log(`style Server started at PORT : ${PORT}`);
})

styleServer.get('/',(req,res) => {
    res.status(200).send(`<h1 style='color:darkBlue'>StyleGuru Server started, and waiting for Client req !!</h1>`)
})

styleServer.post('/',(req,res) => {
    res.status(200).send(`POST REQUEST`)
})
