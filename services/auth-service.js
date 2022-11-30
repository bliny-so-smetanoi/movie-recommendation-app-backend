const User = require('../models/Users')
const {UserDoesNotExistError,
    PasswordIsIncorrectError,
    UserAlreadyExistsError} = require('./errors/auth-error')
const bcrypt = require('bcrypt')
const generateToken = require('./jwt-service')

async function register(registerDto) {
    try{
        const {email, username, password} = registerDto
        const potentialUser = await User.findOne({email})

        if(potentialUser) {
            throw new UserAlreadyExistsError()
        }

        const hashed = await bcrypt.hash(password, 12)
        const user = new User({email, username, password: hashed})

        await user.save()
    } catch (e) {
        throw e
    }
}

async function login(loginDto) {
    try {
        const {email, password} = loginDto
        const user = await User.findOne({email})

        if(!user) {
            throw new UserDoesNotExistError()
        }

        const isValid = await bcrypt.compare(password, user.password)

        if(!isValid) {
            throw new PasswordIsIncorrectError()
        }

        const token = await generateToken(user.id)

        return {token, userId: user.id}
    } catch (e) {
        throw e
    }
}

module.exports = {login, register}