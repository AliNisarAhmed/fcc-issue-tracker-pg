
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, projectname: 'react'},
        {id: 2, projectname: 'vue'},
        {id: 3, projectname: 'elm'}
      ]);
    });
};
