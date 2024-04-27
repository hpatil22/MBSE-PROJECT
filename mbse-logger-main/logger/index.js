const mbseLogger = require('./mbseLogger')
const productionLogger = require('./productionLogger')

let logger = null;

if (process.env.NODE_ENV === "youtube") {
    logger = mbseLogger()
}

if (process.env.NODE_ENV === "production") {
    logger = productionLogger()
}

module.exports = logger;