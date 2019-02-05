
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', (table) => {
    table.increments('id').primary();
    table.string('projectname').notNullable().unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
