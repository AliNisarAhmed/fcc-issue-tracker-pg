
exports.up = function(knex, Promise) {
  return knex.schema.createTable('issues', function (table) {
    table.increments('id').primary();
    table.string('issue_title').notNullable();
    table.string('issue_text').notNullable();
    table.string('created_by').notNullable();
    table.string('assigned_to').defaultTo('');
    table.string('status_text').defaultTo('');
    table.date('created_on').defaultTo((new Date()).toISOString());
    table.date('updated_on').defaultTo((new Date().toISOString()));
    table.boolean('open').defaultTo(true);
    table.integer('project_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('issues');
};
