const knex = require('./knex');

async function findProjectId (projectname) {
  const project = await knex('projects').select('id').where({projectname});
  return project[0];
}

module.exports = {
  getAllProjects () {
    return knex('projects');
  },
  createProject(project) {
    return knex('projects').insert(project, "*");
  },
  async createIssue (projectname, issue) {
    let { id: projectId } = await findProjectId(projectname);
    let issueObj = Object.assign({}, issue, {project_id: projectId});
    return knex('issues').insert(issueObj, "*");
  },
  getAllIssues (projectname, queryParams) {
    return knex('projects').select().rightJoin('issues', 'issues.project_id', '=', 'projects.id').where({projectname: projectname, ...queryParams});
  },
  async updateIssue (projectname, updates) {
    const { id: projectId } = await findProjectId(projectname);
    return knex('issues').where({project_id: projectId}).update({...updates, updated_on: (new Date()).toISOString() }, "*");
  },
  deleteIssue (id) {
    return knex('issues').where({id}).del();
  },
  findIssueById (id) {
    return knex('issues').select().where({id});
  }
}