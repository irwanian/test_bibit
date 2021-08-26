const express = require('express')
const { sequelize } = require('../models').mysql
const port = process.env.PORT || 7000

const app = express()

app.use((req, res, next) => {
    res.success = ({ payload, message, code }) => {
        res.status(code || 200).send({
            code: code || 200,
            message: message || 'success',
            payload: payload || {}
        })
    }

    res.error = (error) => {
        res.status(error.code || 400).send({
            code: error.code || 400,
            message: error.message || 'error',
            payload: error.payload || {}
        })
    }

    next()
})

app.get('/', (req, res) => {
    res.success({ payload: 'Tatakae!!! '})
})

app.use('/', require('./movies'))


sequelize.sync()
.then(() => {
        app.listen(port, () => {
              console.log(`App listening on port: ${port}`)
        })
})
.catch((err) => {
    console.log(' masuk error')
    throw err
})

module.exports = app