class customError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError= (message, statusCode) => {
    return new customError(message, statusCode)
}

module.exports = { customError, createCustomError }