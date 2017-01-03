//Determine to webpack for Development or Production
var environment = (process.env.NODE_ENV || "development").trim();

if (environment === "development") {
    module.exports = require('./webpack.development.js');
} else {
    module.exports = require('./webpack.production.js');
}