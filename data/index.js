const knex = require('knex');

module.exports = config => knex(config.db);