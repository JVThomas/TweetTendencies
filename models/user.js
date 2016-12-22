'use strict'

var bookshelf = require('bookshelf');

const User = 	bookshelf.Model.extend({
	tableName: 'users'
});

module.exports = User;
