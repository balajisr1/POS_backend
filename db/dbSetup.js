const knex = require("knex")
const knexfile = require("./knexfile")
const { Model } = require('objection')

function setupDb() {
    const db = knex(knexfile.development)
    Model.knex(db)
    return db
}

module.exports = setupDb