const { customError } = require("../errors/customError")

const errorHandler = (err, req, res, next) => {
    if (err instanceof customError) {
        return res.status(statusCode).json({msg: err.message})
    }
    return res.status(500).json({msg: 'something went wrong, please try again'})
}

module.exports = errorHandler