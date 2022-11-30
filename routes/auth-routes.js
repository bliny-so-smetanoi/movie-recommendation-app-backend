const {Router} = require('express')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const Users = require('../models/Users')
const {register, login} = require('../services/auth-service')

const router = Router()

// /api/v1/auth/login
router.post('/login',[
    check('email', 'Email should be in format!').isEmail(),
    check('password', 'Password should contain at least 8 characters!').isLength({min: 8})
], async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Invalid data!'
            })
        }

        const {email, password} = req.body
        const result = await login({email, password})

        return res.json(result)
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
})

// /api/v1/auth/register
router.post('/register',[
    check('email', 'Email should be in format!').isEmail(),
    check('password', 'Password should contain at least 8 characters!').isLength({min: 8}),
    check('username', 'Username cannot be so short!').isLength({min: 4})
], async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Invalid data!'
            })
        }

        const {email, password, username} = req.body
        await register({email, password, username})

        return res.json({message: 'Registered successfully!'})
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
})

module.exports = router
