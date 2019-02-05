const knex = require('./knex');

module.exports = {
  getAllProjects () {
    return knex('projects');
  },
  createProject(project) {
    return knex('projects').insert(project, "*");
  },
  async findProjectId (projectname) {
    const project = await knex('projects').select('id').where({projectname});
    return project[0];
  },
  async createIssue (projectname, issue) {
    let projectId = await this.findProjectId(projectname).id;
    let issueObj = Object.assign({}, {project_id: projectId}, issue);
    return knex('issues').insert(issueObj, "*");
  },
  getAllIssues (projectname, queryParams) {
    return knex('projects').select().rightJoin('issues', 'issues.project_id', '=', 'projects.id').where({projectname: projectname, ...queryParams});
  }
}