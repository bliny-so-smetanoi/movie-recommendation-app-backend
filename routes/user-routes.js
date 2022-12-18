const {Router} = require('express')
const User = require('../models/Users')
const router = Router()

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id

        const {email, username, genres} = await User.findById(id)

        return res.json({email, username, genres})
    } catch (e) {
        res.set(500).json({message: "something went wrong"})
    }
})

module.exports = router