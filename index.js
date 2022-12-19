const express = require('express')
const mongo = require('mongoose')
const config = require('config')
const {MongoClient} = require('mongodb')
const app = express()
const Movies = require('./models/Movies')
app.use(express.json({extended: true}))
app.use('/api/v1/auth/', require('./routes/auth-routes'))
app.use('/api/v1/user/', require('./routes/user-routes'))
app.use('/api/v1/movie/', require('./routes/movie-routes'))
const connectionString = config.get('mongoUri')
// const connectionString = config.get('mongoLocal')

const PORT = process.env.PORT || 3000

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

    app.listen(PORT)
    console.log('App started at '+ PORT +' port')
}

start()


// async function copyDb() {
//     const client  = new MongoClient(connectionString)
//
//     try {
//         await client.connect()
//
//         await client.db('movieRecommendation').command({ping: 1})
//         const movies = await client.db('movieRecommendation').collection('movie_collection')
//         const result =  await movies.find().toArray()
//
//         await Movies.insertMany(result)
//         console.log('connected')
//
//
//     } catch (e) {
//         console.log(e.message)
//     } finally {
//          await client.close()
//     }
// }