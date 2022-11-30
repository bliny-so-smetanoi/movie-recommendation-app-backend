class UserDoesNotExistError extends Error {
    constructor() {
        super();
        this.message = 'User does not exist!'
        this.name = 'UserDoesNotExistError'
    }
}

class PasswordIsIncorrectError extends Error {
    constructor() {
        super();
        this.message = 'Password is incorrect!'
        this.name = 'PasswordIsIncorrectError'
    }
}

class UserAlreadyExistsError extends Error {
    constructor() {
        super();
        this.message = 'Email is already taken!'
        this.name = 'UserAlreadyExistsError'
    }
}

module.exports = {UserDoesNotExistError,
    PasswordIsIncorrectError,
    UserAlreadyExistsError}