
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function(table){
    table.increments('id').primary();
    table.string('name').notNullable().unique();
    table.string('email').notNullable().unique();
    table.string('username').notNullable();
    table.string('uid');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
