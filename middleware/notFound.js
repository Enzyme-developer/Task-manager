const notfound = (req, res) => {
    res.status(404).send('Page does not Exist')
}

module.exports = notfound 