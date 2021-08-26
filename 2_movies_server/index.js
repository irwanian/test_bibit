require('dotenv').config()

require('./src/models')
require('./src/routes')

module.exports = require('./src/routes')