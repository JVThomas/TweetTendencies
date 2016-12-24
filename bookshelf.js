const knex = require('knex')(require('knexfile')[process.env.NODE_ENV]);
const bookshelf = require('bookshelf');

module.exports = bookshelf;
