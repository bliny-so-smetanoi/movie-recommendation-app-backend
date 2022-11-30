const express = require('express')
const mongo = require('mongoose')
const config = require('config')

const app = express()

app.use(express.json({extended: true}))
app.use('/api/v1/auth/', require('./routes/auth-routes'))

// const connectionString = config.get('mongoUri')
const connectionString = config.get('mongoLocal')

async function start() {
    try {
        await mongo.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (e) {
        console.error(e.message)
        process.exit(1)
    }

    app.listen(3000)
    console.log('App started at 3000 port')
}

start()