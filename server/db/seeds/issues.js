
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('issues').del()
    .then(function () {
      // Inserts seed entries
      return knex('issues').insert([
        {
          id: 1,
          issue_title: "First React Issue",
          issue_text: "First React Issue made with seed",
          created_by: "ANA",
          assigned_to: "Samrah Akber",
          status_text: "Need urgent attention",
          project_id: 1,
        },
        {
          id: 2,
          issue_title: "Second React Issue",
          issue_text: "Second React Issue made with seed",
          created_by: "SAM",
          assigned_to: "ANA",
          status_text: "Need urgent attention",
          project_id: 1,
        },
        {
          id: 3,
          issue_title: "Third React Issue",
          issue_text: "Third React Issue made with seed",
          created_by: "ANA",
          assigned_to: "SAM",
          status_text: "Need urgent attention",
          project_id: 1,
        },
        {
          id: 4,
          issue_title: "First Vue Issue",
          issue_text: "First Vue Issue made with seed",
          created_by: "ANA",
          assigned_to: "Samrah Akber",
          status_text: "Need urgent attention",
          project_id: 2,
        },
        {
          id: 5,
          issue_title: "Second Vue Issue",
          issue_text: "Second Vue Issue made with seed",
          created_by: "SAM",
          assigned_to: "ANA",
          status_text: "Need urgent attention",
          project_id: 2,
        },
        {
          id: 6,
          issue_title: "Third Vue Issue",
          issue_text: "Third Vue Issue made with seed",
          created_by: "ANA",
          assigned_to: "SAM",
          status_text: "Need urgent attention",
          project_id: 2,
        },
      ]);
    });
};

// table.increments('id').primary();
//     table.string('issue_title').notNullable();
//     table.string('issue_text').notNullable();
//     table.string('created_by').notNullable();
//     table.string('assigned_to').defaultTo('');
//     table.string('status_text').defaultTo('');
//     table.date('created_on').defaultTo((new Date()).toISOString());
//     table.date('updated_on').defaultTo((new Date().toISOString()));
//     table.boolean('open').defaultTo(true);
//     table.integer('project_id');