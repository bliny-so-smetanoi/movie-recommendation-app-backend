const jwt = require('jsonwebtoken')
const config = require('config')

async function generateToken(userId) {
    try {
        const secret = config.get('jwtSecret')

        const token = jwt.sign(
            {userId},
            secret,
            {expiresIn: '1h'}
        )
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = generateToken