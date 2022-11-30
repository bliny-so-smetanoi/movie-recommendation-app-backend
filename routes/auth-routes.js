const {Router} = require('express')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const Users = require('../models/Users')

const router = Router()

// /api/v1/auth/login
router.post('/login',[
    check('email', 'Email should be in format!').isEmail(),
    check('password', 'Password should contain at least 8 characters!').isLength({min: 8})
], async (req, res) => {
    try {
        const {email, password} = req.body
        // Todo: create service for auth...

    } catch (e) {
        res.status(500).send({message: e.message})
    }
})

// /api/v1/auth/register
router.post('/register',[
    check('email', 'Email should be in format!').isEmail(),
    check('password', 'Password should contain at least 8 characters!').isLength({min: 8}),
    check('username', 'Username cannot be so short!').isLength({min: 4})
], async (req, res) => {
    try {
        const {email, password, username} = req.body
        // Todo: create service for auth...

    } catch (e) {
        res.status(500).send({message: e.message})
    }
})

module.exports = router
