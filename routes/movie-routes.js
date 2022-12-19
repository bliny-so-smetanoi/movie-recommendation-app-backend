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