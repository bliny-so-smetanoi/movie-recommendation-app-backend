const {Router} = require('express')
const Movies = require('../models/Movies')
const axios = require('axios')
const router = Router()
// With pagination
router.get('/:page', async (req,res) => {
    try {
        const page = (+req.params.page) - 1
        const result = await Movies.find().skip(5 * page).limit(5)

        res.json(result)
    } catch (e) {
        res.status(500).json({message: 'Went wrong'})
    }
})
// Search by title
router.get('/search/:title/:page', async (req, res) => {
    try {
        const page = (+req.params.page) - 1
        const title = req.params.title
        const regex = new RegExp(title, 'i')
        const result = await Movies.find({'title': regex}).skip(5 * page).limit(5)

        res.json(result)
    } catch (e) {
        res.status(500).json({message: 'Wrong'})
    }
})
// Get movie by its id


router.get('/search/genre/:genre/:page', async (req, res) => {
    try {
        const page = (+req.params.page) - 1
        const genre = req.params.genre
        const regex = new RegExp(genre, 'i')
        const result = await Movies.find({'genres': regex}).skip(5 * page).limit(5)

        res.json(result)

    }catch (e) {
        res.status(500).json({message: 'Wrong'})
    }

})

router.get('/getgenres/all/genres/', async (req,res) => {
    try {
        const genres = ['Documentary', 'Science Fiction', 'Western', 'Comedy',
            'Foreign', 'Drama', 'Fantasy', 'History', 'TV', 'Adventure', 'Thriller',
            'Music', 'Action', 'Mystery', 'Horror', 'War', 'Animation', 'Movie',
            'Romance', 'Family', 'Crime']

        res.json(genres)
    } catch (e) {
        res.status(500).json({message: 'Wrong'})
    }
})
router.get('/byid/:id', async (req,res) => {
    try{
        const id = req.params.id
        const result = await Movies.findOne({ _id: id})

        res.json(result)
    } catch (e) {
        res.status(500).json({message: 'wrong'})
    }
})

router.get('/suggest', async (req, res) => {
    try {

    } catch (e) {

    }

})

module.exports = router